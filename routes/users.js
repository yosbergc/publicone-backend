const express = require('express')
const router = express.Router()
const User = require('../schemas/User')
const bcrypt = require('bcrypt')

router.get('/:id', async (req, res) => {
    const { id } = req.params

    const user = await User.findByPk(id, {
        include: ['posts', 'blogs']
    })

    if (!user) {
        return res.status(500).send('We got one error.')
    }
    res.json(user)
})

router.post('/', async (req, res) => {
    const { email, password, username } = req.body

    if (!email || !password || !username) {
        return res.status(400).send('Bad request')
    }

    const hashedPassword = await bcrypt.hash(password, 5)
    try {
        await User.create({
            email: email,
            password: hashedPassword,
            username: username
        })
        res.status(201).json('User created succesfully')
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;