import Api from './Api'

export default {
  index () {
    return Api().get('notifications')
  },
  show (notificationId) {
    return Api().get(`edit-notification/${notificationId}`)
  },
  post (notification) {
    return Api().post('add-notifications', notification)
  },
  put (notification) {
    return Api().put('edit-notification/' + notification.id, notification)
  }
}
