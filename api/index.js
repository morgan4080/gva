const app = require('express')()

const bodyParser = require('body-parser')

const cors = require('cors')

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

module.exports = app;
