<template>
<v-toolbar color="purple" class="white--text" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>NotifyManago</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat v-on:click="goTo('login')">Login</v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat v-on:click="goTo('register')">Sign Up</v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat v-on:click="logout">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    goTo (location) {
      this.$router.push(location)
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
