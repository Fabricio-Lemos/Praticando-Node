const Sequelize = require('sequelize')
const dbconfig = require('../config/database')
const conection = new Sequelize(dbconfig)
const User = require('../models/User')

User.init(conection)


module.exports = conection;