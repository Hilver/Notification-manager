<template>
<v-container fluid fill-height>
  <v-layout justify-center>
    <v-flex xs12 md10 lg6>
    <v-toolbar flat dense dark class="purple">
        <v-toolbar-title>Notifications Panel</v-toolbar-title>
        <v-btn fab dark absolute right top-10 large color="indigo" v-on:click="goTo('add-notifications')">
      <v-icon dark>add</v-icon>
    </v-btn>
    </v-toolbar>
    <div class="pa-3 white elevation-2 flex" v-for="notification in notifications" :key="notification.id">
        <v-layout>
          <v-flex xs2 md2 lg1 class="flex-center">
            <v-icon x-large color="blue">info</v-icon>
          </v-flex>

          <v-flex xs6 md7 lg9>
            <div class="title">
             {{ notification.title }}
            </div>
            <div class="subtitle">
             {{ notification.message }}
            </div>
            <div>
               <v-btn color="primary" disabled>Done
                  <v-icon dark right>check_circle</v-icon>
               </v-btn>
               <v-btn color="info" v-on:click="goTo('edit-notification/' + notification.id)">
                  <v-icon dark left>edit</v-icon>Edit
               </v-btn>
               <v-btn color="red" dark>
                  <v-icon dark left>remove_circle</v-icon>Cancel
               </v-btn>
            </div>
          </v-flex>
          
          <v-flex xs4 md3 lg2 class="flex-center">
           <div>
            <v-icon x-large color="blue">event</v-icon>
          </div>
          <div class="show-send-date">
            {{ notification.timeDay + ' | ' + notification.timeHour }}
          </div>

          </v-flex>
        </v-layout>       
        
        
    </div>
  </v-flex>
 </v-layout>
 </v-container>
</template>
<script>
import NotificationService from '../services/NotificationService'

export default {
  data () {
    return {
      notifications: null     
    }
  },
  async mounted () {
    this.notifications = (await NotificationService.index()).data
  },
  methods: {
      goTo (location) {
          this.$router.push(location)
      }
  }
}
</script>

<style scoped>
.error{
  color: red;
}
.title{
  font-weight: bold;
  font-size: 20px;
}
.subtitle{
  font-size: 16px;
}
.show-send-date{
  font-weight: bold;
}
.flex{
  display: flex;
  flex-direction: column;
}

.flex-center{
  align-self: center;
}
</style>
