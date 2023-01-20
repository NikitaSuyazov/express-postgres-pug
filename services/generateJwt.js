const jwt = require('jsonwebtoken')

const generateJwt = (id, email, login, role) =>
  jwt.sign(
    { id, email, login, role },
    process.env.SECRET_KEY,
    { expiresIn: '24h' }
  )

module.exports = generateJwt