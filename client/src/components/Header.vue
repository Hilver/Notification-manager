<template>
<v-toolbar color="purple" class="white--text" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>NotifyManago</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat v-on:click="goTo('login')">Login</v-btn>
      <v-btn flat v-on:click="goTo('register')">Sign Up</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>

export default {
  data () {

  },
  methods: {
    goTo (location) {
      this.$router.push(location)
    }
  }
}
</script>

<style scoped>

</style>
