const { readFileSync } = require('fs')

const { join } = require('path')

const jwt = require('jsonwebtoken')

const publicKey = readFileSync(join(__dirname, '../_JWTKeys', 'jwtRS256.key.pub'), {encoding: 'utf-8'})

module.exports = (req, res, next) => {

  try {
    const header = req.headers.authorization

    if (header === undefined) {
      res.status(401).json({
        error: "header undefined"
      })
    }

    const bearer = header.split(' ')

    const token = bearer[1]

    jwt.verify(token, publicKey,{ algorithm: 'RS256' }, (err, user) => {
      if (err) {
        res.status(401).json({
          error: err
        })
      }
      req.user = user
      next(user)
    })

  } catch (e) {
    res.status(401).json({
      error: e
    })
  }

}
