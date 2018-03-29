import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/Register'
import Login from '../components/Login'
import AddNotifications from '../components/AddNotifications'
import Notifications from '../components/Notifications'
import EditNotification from '../components/EditNotification'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add-notifications',
      name: 'add-notifications',
      component: AddNotifications
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: Notifications
    },
    {
      path: '/edit-notification/:notificationId',
      name: 'edit-notification',
      component: EditNotification
    }

  ]
})
