const { Sequelize } = require('sequelize')

const sequelizeInstance = new Sequelize('', {
    dialect: 'postgres',
    logging: true
})

module.exports = sequelizeInstance;