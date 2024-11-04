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
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
})

User.hasMany(Blog)
Blog.belongsTo(User)

module.exports = User;