const express = require('express')
const router = express.Router()
const Comment = require('../schemas/Comment')

router.post('/', async (req, res) => {
    const { content, userId, postId } = req.body

    if (!content || !userId || !postId) {
        res.status(400).send('Bad request')
    }

    try {
        const newComment = await Comment.create({
            content: content,
            userId: userId,
            postId: postId
        })
        res.status(201).json(newComment)
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = router;