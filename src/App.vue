<template>
  <div id="app">
    <Navigation />
    <div v-if="currentPage === 'navToHome'" v-bind:contacts="allContacts">
      <Home />
    </div>
    <div v-else-if="currentPage === 'navToSettings' ">
      <Settings />
    </div>
    <div v-else-if="currentPage === 'navToAbout' ">
      <About />
    </div>
    <div v-else>
      Fail
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import About from './views/About'
import Home from './views/Home'
import Settings from './views/Settings'

export default {
  name: 'App',
  components: {
    Navigation,
    About,
    Home,
    Settings
  },
  computed: {
    currentPage(){
      return this.$store.state.currentPage
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
