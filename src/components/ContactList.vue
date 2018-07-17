<template lang="html">
<div class="contact-list">
  <h4 v-for="contact in contacts">
    {{ contact.name }}
  </h4>
</div>


</template>

<script>
export default {
  name: 'ContactList',
  props: {
    contacts: Array
  }
}
</script>

<style lang="css">
</style>
