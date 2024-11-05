const express = require('express')
const router = express.Router()
const Blog = require('../schemas/Blog')

router.get('/:id', async (req, res) => {
    const { id } = req.params

    const blogFound = await Blog.findByPk(id, {
        include: ['posts']
    })

    if (!blogFound) {
        return res.status(404).send('Not found')
    }
    
    res.json(blogFound)
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
        res.status(500).send(`We got one error. Code: ${error.parent.code}. If you want help contact our customer service.`)
    }
})

module.exports = router