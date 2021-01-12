const Sequelize = require('sequelize')
const dbconfig = require('../config/database')
const conection = new Sequelize(dbconfig)

try {
    conection.authenticate()
    console.log('Connection has been estabilished succesfuly.')
} catch (error) {
    console.log('Unable to conect to the database: ' + error)
}

module.exports = conection;