const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')
const Blog = require('./Blog')

const User = sequelize.define('user', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.hasMany(Blog)
Blog.belongsTo(User)

module.exports = User;