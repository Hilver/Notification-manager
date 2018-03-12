const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'hilver_notifyManager',
        user: process.env.DB_USER || 'hilver_notifyManager',
        password: process.env.DB_PASS || 'hilver_notifyManager',
        options: {
         dialect: process.env.DIALECT || 'sqlite',
         host: process.env.HOST || 'localhost',
         storage: './hilver_notifyManager.sqlite',
         operatorsAliases: Op
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}