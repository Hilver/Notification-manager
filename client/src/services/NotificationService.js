import Api from './Api'

export default {
  index () {
    return Api().get('notifications')
  },
  post (notification) {
    return Api().post('add-notifications', notification)
  }
}
