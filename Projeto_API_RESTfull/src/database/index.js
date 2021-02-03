const Sequelize = require('sequelize')
const dbconfig = require('../config/database')
const conection = new Sequelize(dbconfig)
const Address = require('../models/Address')
const User = require('../models/User')

User.init(conection)
Address.init(conection)
Address.associate(conection.models)
User.associate(conection.models)


module.exports = conection;