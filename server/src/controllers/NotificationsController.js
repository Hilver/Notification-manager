const {Notifications} = require('../models')



module.exports = {
   async index (req, res) {
       try{
        const notificationsFind = await Notifications.findAll({
            limit: 10
        })
        res.send(notificationsFind)
       } 
       catch (err) {
           res.status(400).send({
               error: 'An error has occured trying to fetch notifications database.'
           })
       }
    },
    async post (req, res) {
        try{
         const notifications = await Notifications.create(req.body)
         res.send(notifications)
        } 
        catch (err) {
            res.status(400).send({
                error: 'An error has occured trying to create notification.'
            })
        }
     }
}

