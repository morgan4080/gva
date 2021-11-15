const app = require('express')()

const bodyParser = require('body-parser')

const cors = require('cors')

const nodemailer = require('nodemailer')

const { IncomingForm } = require('formidable')

app.use(cors())

// parse application/json
app.use(bodyParser.json({
  strict: true,
  type: 'application/json'
}))

app.all("/api", async (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.query, req.body, req.method);

  if (req.query.context === 'contactForm' || req.query.context === 'quoteForm' && req.method === 'POST') {
    const form = new IncomingForm({ multiples: true })

    const context = req.query.context

    let result

    try {
      result = await new Promise((resolve, reject) => {
        form.parse(req, function(err, fields, files) {
          if (err) {
            // Check for and handle any errors here.
            // eslint-disable-next-line no-console
            console.error("form parsing error", err.message)
            reject(err)
          }
          resolve({fields, files})
        })
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log("form error", e)

      res.status(405).json({
        error: e,
        message: "form: issue"
      })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
    })

    const origin = {
      name: 'GVA Website',
      email: process.env.MAIL_USERNAME,
      message: result.fields.message
    }

    const destination = {
      email: process.env.MAIL_USERNAME
    }

    let message

    if (context === 'quoteForm') {
      message = {
        subject: 'Website Quote Lead',
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Great Vacations Adventures & Travel</title>
          </head>
          <body style="padding: 0; margin: 0;" bgcolor="#eeeeee">
            <span><strong>Last name:</strong>${result.fields.firstName}</span><br>
            <span><strong>Last name:</strong>${result.fields.lastName}</span><br>
            <span><strong>Email:</strong>${result.fields.email}</span><br>
            <span><strong>Phone:</strong>${result.fields.phone}</span><br>
            <span><strong>Inquiry:</strong>${origin.message}</span><br>
          </body>
        </html>
      `
      }
    } else if (context === 'contactForm') {
      message = {
        subject: 'Website Contact Lead',
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Great Vacations Adventures & Travel</title>
          </head>
          <body style="padding: 0; margin: 0;" bgcolor="#eeeeee">
            <span><strong>Full name:</strong>${result.fields.fullName}</span><br>
            <span><strong>Email:</strong>${result.fields.email}</span><br>
            <span><strong>Phone:</strong>${result.fields.phone}</span><br>
            <span><strong>Message:</strong>${origin.message}</span><br>
          </body>
        </html>
        `
      }
    }

    const mailOptions = {
      from: `"${origin.name}" <${origin.email}>`, // sender address
      to: `${destination.email}`, // list of receivers
      subject: `${message.subject}`, // Subject line
      html: `${message.html}`, // plain text body
    }

    try {
      const info = await transporter.sendMail(mailOptions)
      // eslint-disable-next-line no-console
      console.log("Email sent successfully", info);
      res.json({
        message: "Email sent successfully",
        response: info
      })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log("Error " + err);
      res.status(405).json({ error: err })
    }

  } else {
    res.json({ data: 'data' });
  }
})

module.exports = app;
