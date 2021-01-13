const Sequelize = require('sequelize')
const dbconfig = require('../config/database')
const conection = new Sequelize(dbconfig)




module.exports = conection;