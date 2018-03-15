<template>
<v-container fluid>
<v-layout row wrap class="pt-5">
<v-flex xs12 lg6 class="ma-1">
<div class="white elevation-2">
    <v-toolbar flat dense dark class="purple">
        <v-toolbar-title> Notification Settings</v-toolbar-title>
    </v-toolbar>
    <div class="pa-5">
        <v-form>
  <v-text-field required :rules="[rules.required]" name="title" label="title" v-model="notification.title">
  </v-text-field>
  <v-text-field required :rules="[rules.required]" name="message" label="message" v-model="notification.message">
  </v-text-field>
  </v-form>
  </div>  
</div>
</v-flex>
<v-flex xs12 lg5 class="ma-1">
<div class="white elevation-2">
    <v-toolbar flat dense dark class="purple">
        <v-toolbar-title> Time Settings</v-toolbar-title>
    </v-toolbar>
    <div class="pa-2">
        <v-date-picker required full-width landscape v-model="notification.timeDay" reactive class="mb-1" color="indigo"></v-date-picker>
        <v-time-picker required full-width landscape v-model="notification.timeHour" format="24hr" color="indigo"></v-time-picker>
  </div>
</div>
</v-flex>
</v-layout>
<v-layout row wrap justify-center class="pt-5">
  <v-flex lg3>
    <div v-if="error" class="danger-alert">{{ error }}</div>
  <v-btn large block color="primary" v-on:click="create">Add Notification
  </v-btn>  
  </v-flex>
</v-layout>
</v-container>

</template>
<script>
import NotificationService from '../services/NotificationService'

export default {
  data () {
    return {      
      notification: {
      title: '',
      message: '',
      timeDay: null,
      timeHour: null      
      },
      rules: {
        required: (value) => !!value || "Required."
      },
      error: null
    }
  },  
  methods: {
    async create () {
      const areAllFieldsFilledIn = Object.keys(this.notification).every(key => !!this.notification[key])
      if(!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields and set time of send.'
        return
      }
      try{        
      const postNotify = await NotificationService.post(this.notification)
      this.$router.push("/notifications")
      } catch(err){
        console.log("cannot post notification", err)
      }
    }
  }
}
</script>

<style scoped>

.danger-alert {
  color: red;
}

</style>
