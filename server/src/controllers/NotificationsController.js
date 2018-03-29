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
    async show (req, res) {
        try{
         const notification = await Notifications.findById(req.params.notificationId)
         res.send(notification)
        } 
        catch (err) {
            res.status(400).send({
                error: 'An error has occured trying to show notification.'
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
     },
     async put (req, res) {
        try{
         const notification = await Notifications.update(req.body, {
             where: {
                 id: req.params.notificationId
             }
         })
         res.send(req.body)
        } 
        catch (err) {
            res.status(400).send({
                error: 'An error has occured trying to update the notification.'
            })
        }
     }
}

