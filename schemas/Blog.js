const sequelize = require('../libs/sequelize')
const { DataTypes } = require('sequelize')

const Blog = sequelize.define('blog', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
})

module.exports = Blog