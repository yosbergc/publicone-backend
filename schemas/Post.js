const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')
const User = require('./User')
const Blog = require('./Blog')

const Post = sequelize.define('post', {
    id: {
        type: DataTypes.STRING,
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
    }
})

User.hasMany(Post, { foreignKey: 'userId', as: 'posts'})
Post.belongsTo(User, { foreignKey: 'userId', as: 'user'})

Blog.hasMany(Post, { foreignKey: 'blogId', as: 'posts'})
Post.belongsTo(Blog, { foreignKey: 'blogId', as: 'blog'})

module.exports = Post;