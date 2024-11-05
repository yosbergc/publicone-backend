const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports = (req, res, next) => {
    const authorization = req.get('authorization')

    if (!authorization || !authorization.toLowerCase().startsWith('bearer')) {
        return res.status(400).send('Bad request')
    }

    const token = token.slice(7, authorization.length)

    try {
        const isCorrectToken = jwt.verify(token, process.env.PRIVATE_KEY)

        req.userId = isCorrectToken.id
        next()
    } catch {
        return res.status(400).send('There is a problem with your token, try to relogging')
    }
}