const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const NotificationsController = require('./controllers/NotificationsController')

module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    ),
    app.post('/login',
        AuthenticationController.login
    ),

    app.get('/notifications',
        NotificationsController.index
    ),    
    app.post('/add-notifications',
        NotificationsController.post
    ),
    app.put('/edit-notification/:notificationId',
        NotificationsController.put
    ),
    app.get('/edit-notification/:notificationId',
        NotificationsController.show
    )    
}

