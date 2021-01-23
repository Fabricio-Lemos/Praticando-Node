const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', '0636OBgl', {
    host: 'localhost',
    dialect:'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}