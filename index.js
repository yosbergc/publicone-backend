const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const userRouter = require('./routes/users')
const blogRouter = require('./routes/blog')
const postRouter = require('./routes/post')
const commentRouter = require('./routes/comment')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', userRouter)
app.use('/blog', blogRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)

app.listen(PORT)