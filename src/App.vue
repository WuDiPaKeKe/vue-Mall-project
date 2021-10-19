<template>
  <div id="app">
    app
  </div>
</template>

<script>
  import {getMockUsers} from "api/api"
  export default {
    name: 'App',
    async mounted() {
      await getMockUsers()
    }

  }
</script>

<style scoped>

</style>

