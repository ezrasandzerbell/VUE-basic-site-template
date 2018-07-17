<template>
  <div>
    <h1>Home</h1>
    <p>Here is some information. This is the home page</p>
    <ContactList v-bind:contacts="allContacts"/>
  </div>
</template>

<script>
import ContactList from '../components/ContactList';

export default {
  name: 'Home',
  components: {
    ContactList
  },
  computed: {
    allContacts() {
      return this.$store.state.contacts
    }
  }
}
</script>
<style>
</style>
