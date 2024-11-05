const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')
const User = require('./User')
const Blog = require('./Blog')
const Comment = require('./Comment')

const Post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    blogId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'blogs',
            key: 'id'
        }
    },
    commentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'comments',
            key: 'id'
        }
    }
})

User.hasMany(Post, { foreignKey: 'userId', as: 'posts'})
Post.belongsTo(User, { foreignKey: 'userId', as: 'user'})

Blog.hasMany(Post, { foreignKey: 'blogId', as: 'posts'})
Post.belongsTo(Blog, { foreignKey: 'blogId', as: 'blog'})

Post.hasMany(Comment, { foreignKey: 'commentId', as: 'comments'})
Comment.belongsTo(Post, { foreignKey: 'commentId', as: 'post'})

module.exports = Post;