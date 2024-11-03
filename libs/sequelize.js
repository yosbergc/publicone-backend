require('dotenv').config()
const { Sequelize } = require('sequelize')

const sequelizeInstance = new Sequelize(DB_URI, {
    dialect: 'postgres',
    logging: true
})


module.exports = sequelizeInstance;