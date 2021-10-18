const app = require('express')();
// const {IncomingForm} = require('formidable');
// const axios = require('axios');
// const FormData = require('form-data');
const bodyParser = require('body-parser');
// const fs = require('fs');

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
