<template>
<v-container fluid>
  <v-layout row justify-center>
    <v-flex xs6 md6 lg3 purple darken-2>
  <h1 class="white--text">Register</h1>
  </v-flex>
 </v-layout>
 <v-layout row justify-center>
   <v-flex xs6 md6 lg3 align-center>
  <v-text-field type="email" name="email" label="email" v-model="email"></v-text-field>
   </v-flex>
   </v-layout>
   <v-layout row justify-center>
   <v-flex xs6 md6 lg3 align-center>
  <v-text-field type="password" name="password" label="password" v-model="password"></v-text-field>
   </v-flex>
   </v-layout>
 <div class="error" v-html="error"></div>
 <v-btn outline v-on:click="register" color="blue">Register</v-btn>
 </v-container>
</template>
<script>
import AuthenticationService from '../services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error{
  color: red;
}
</style>
