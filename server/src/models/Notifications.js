
module.exports = (sequelize, DataTypes) => {
const Notifications = sequelize.define('Notifications', {
    title: DataTypes.STRING,
    message: DataTypes.STRING,
    timeDay: DataTypes.DATEONLY,
    timeHour: DataTypes.TIME
})
   
    return Notifications
}