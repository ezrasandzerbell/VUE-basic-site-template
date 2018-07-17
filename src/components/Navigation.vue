<template>
  <b-navbar toggleable="md" type="dark" variant="info">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">EveryOne</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-navbar-nav>
          <b-nav-item v-on:click="navToHome">Home</b-nav-item>
          <b-nav-item v-on:click="navToAbout">About</b-nav-item>
          <b-nav-item v-on:click="navToSettings">Settings</b-nav-item>

        </b-navbar-nav>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    navToSettings() {
      console.log("yeah!");
      this.$store.dispatch('updateView', "navToSettings")
    },
    navToHome() {
      this.$store.dispatch('updateView', "navToHome")
    },
    navToAbout() {
      this.$store.dispatch('updateView', "navToAbout")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
