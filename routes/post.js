const express = require('express')
const router = express.Router()
const Post = require('../schemas/Post')

router.post('/', async (req, res) => {
    const { title, body, userId, blogId } = req.body

    if(!title || !body || !userId || !blogId ) {
        return res.status(400).send('Bad request')
    }

    try {
        const newPost = await Post.create({
            title: title,
            body: body,
            userId: userId,
            blogId: blogId
        })
    
        res.json(newPost)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;