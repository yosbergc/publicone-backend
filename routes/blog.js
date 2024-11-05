const express = require('express')
const router = express.Router()
const Blog = require('../schemas/Blog')

router.get('/id', async (req, res) => {
    const { id  } = req.params

    if(!id) {
        return res.status(400).send('Bad request')
    } 

    try {
        const blogFound = await Blog.findByPk(id)
        res.json(blogFound)
    } catch(error) {
        res.status(500).send(error)
    }
})

router.post('/', async (req, res) => {
    const { name, description, userId } = req.body

    if (!name || !userId ) {
        return res.status(400).send('Bad request')
    }

    try {
        const newBlog = await Blog.create({
            name: name,
            description: description || '',
            userId: userId
        })
    
        res.json(newBlog)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router