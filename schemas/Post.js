const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')

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
    }
})

module.exports = Post;