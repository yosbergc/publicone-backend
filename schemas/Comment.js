const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')
const User = require('./User')
const Post = require('./Post')

const Comment = sequelize.define('comment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content: {
        type: DataTypes.STRING,
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
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'posts',
            key: 'id'
        }
    }
})

Comment.belongsTo(User, { foreignKey: 'userId', as: 'user'})

module.exports = Comment;