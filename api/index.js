const { readFileSync } = require('fs')

const { join } = require('path')

const { PrismaClient } =  require('@prisma/client')

const app = require('express')()

const bodyParser = require('body-parser')

const cors = require('cors')

const { OAuth2Client } = require('google-auth-library')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

// const fetch = require('node-fetch')

const privateKey = readFileSync(join(__dirname, './_JWTKeys', 'jwtRS256.key'), { encoding : 'utf8' })

// const { IncomingForm } = require('formidable')

const auth = require('./middleware/auth');

const prisma = new PrismaClient()

app.use(cors())

// parse application/json
app.use(bodyParser.json({
  strict: true,
  type: 'application/json'
}))

app.get("/api", (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.query);
  res.json({ data: 'data' });
})

app.get("/api/me", auth, (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.user)
  res.status(200).json({
    ...req.user
  });
})

app.post("api/login", async (req,res) => {
  try {
    // eslint-disable-next-line no-console
    console.log(req.method)
    if (req.method === "POST" && Object.keys(req.body).length !== 0 && req.body.email && req.body.password) {
      const response = await doLogin(req)
      res.status(response.status).json({
        ...response
      })
    } else
    if (req.method === "POST" && Object.keys(req.query).length > 0) {
      // eslint-disable-next-line no-console
      console.log("doing social login")
      const response = await doSocialLogin(req, res)
      if (response.status === 308) {
        // send back any data from provider to aid in signup
        // inform them social cant be used without email
        res.redirect(`/register?message=${response.message}`)
        return
      }
      res.status(response.status).json({
        ...response
      })
    }
  } catch (e) {
    res.status(401).json({
      error: e
    });
  }
})

async function doLogin(req) {
  try {
    const user = await prisma.users.findFirst({
      where: {
        email: req.body.email,
      },
    })

    if (user === null) {
      return {
        message: 'user not found',
        status: 401
      }
    }

    const match = bcrypt.compareSync(req.body.password, user.password)

    delete user.password

    delete user.provider_id

    if (match) {
      const token = jwt.sign({ ...user }, privateKey, { algorithm: 'RS256' })

      return {
        message: 'success',
        status: 200,
        token
      }

    } else {

      return {
        message: 'password/email dont match our record',
        status: 401
      }

    }
  } catch (e) {

    throw new Error(e)

  }
}

async function doSocialLogin(req) {

  const { provider, callback } = req.query

  // eslint-disable-next-line camelcase
  const { code, code_verifier, client_id, redirect_uri } = req.body

  if (callback && provider === 'google') {
    if (!code) {

      // eslint-disable-next-line no-console
      console.log(`google login failed`)

      return {
        status: 405,
        message: 'required details missing'
      }
    }

    // eslint-disable-next-line no-console
    console.log(`google login`, code)
    // Exchange authorization code for token
    try {
      const oAuth2Client = await getAuthenticatedClient(code, code_verifier, client_id, redirect_uri)
      // use sub property of  ID token as the unique-identifier key for a user
      const url = 'https://www.googleapis.com/oauth2/v3/userinfo'

      const { data } = await oAuth2Client.request({url})

      const { sub, email, name, picture } = data

      if (!email) {
        // figure out if the user without email exists in db by provider_id
        // login user using provider_id
        const user = await prisma.users.findFirst({
          where: {
            provider_id: sub,
          },
        })

        if (user && user.provider_id) {
          delete user.password
          delete user.provider_id
          const token = jwt.sign({ ...user }, privateKey, { algorithm: 'RS256' })
          // eslint-disable-next-line no-console
          console.log("logged in existing client through provider_id")

          // eslint-disable-next-line no-console
          console.log("the picture", picture)

          return {
            message: "Logged In",
            status: 200,
            token
          }
        }

        return {
          message: "Provide missing email",
          status: 308
        }
      }
      const user = await prisma.users.findFirst({
        where: {
          email,
        },
      })

      if (user) {
        // login existing user
        // assign jwt token using user data
        delete user.password
        delete user.provider_id
        const token = jwt.sign({ ...user }, privateKey, { algorithm: 'RS256' })
        // eslint-disable-next-line no-console
        console.log("logged in existing client through FB")

        if (!user.provider_id) {
          const data00 = {
            provider: "google",
            provider_id: sub
          }

          await prisma.users.update({
            where: { id: user.id },
            data: {
              ...data00
            },
          })

        }

        return {
          message: "Logged In",
          status: 200,
          token
        }
      }
      // sign up user
      // assign jwt token
      // eslint-disable-next-line camelcase
      const account_id = 1
      const response00 = await prisma.users.create({
        data: {
          accounts: { connect: { id: account_id } },
          name,
          email
        }
      })

      // add metadata field
      /* const metadata = {
        country: '',
        type: 'student',
        picture
      } */

      delete response00.password

      delete response00.provider_id

      const token00 = jwt.sign({ ...response00 }, privateKey, { algorithm: 'RS256' })

      return {
        message: "Logged In",
        status: 200,
        token: token00
      }

    } catch (e) {

      return {
        status: 405,
        error: e
      }

    }

  }
}

// eslint-disable-next-line camelcase
function getAuthenticatedClient(code, code_verifier, id, uri) {
  // eslint-disable-next-line camelcase
  const { client_id, client_secret, redirect_uri } = {
    client_id: id,
    client_secret: 'VpqJRnugdEOA9WXeWeohFXJb',
    redirect_uri: uri
  }

  const oAuth2Client = new OAuth2Client(
    client_id,
    client_secret,
    redirect_uri
  )

  // eslint-disable-next-line no-console
  console.log("auth client created");

  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      // Now that we have the code, use that to acquire tokens.
      const { tokens } = await oAuth2Client.getToken({
        code,
        codeVerifier: code_verifier,
        client_id,
        redirect_uri
      })
      // Make sure to set the credentials on the OAuth2 client.
      oAuth2Client.setCredentials(tokens)
      resolve(oAuth2Client)
    }
    catch (e) {
      reject(e)
    }

  })
}

module.exports = app;
