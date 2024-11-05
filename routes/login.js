const express = require('express')
const router = express.Router()
const User = require('../schemas/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).send('Bad request')
    }

    try {
        const foundUser = await User.findOne({
            where: { email: email }
        })
    
        if (!foundUser) {
            return res.status(400).send('Incorrect email/password.')
        }
    
        const isPasswordCorrect = await bcrypt.compare(password, foundUser.password)
    
        if (!isPasswordCorrect) {
            return res.status(400).send('Incorrect email/password.')
        }

        const user = {
            id: foundUser.id,
            email: foundUser.email
        }
        jwt.sign(user, )
    } catch (error) {
        res.status(500).send(error)
    }
    
})

module.exports = router;