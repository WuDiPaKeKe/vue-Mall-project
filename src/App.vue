<template>
  <div id="app">
    <mall-header></mall-header>
    <router-view></router-view>
    <mall-footer v-if = "!$route.meta.hideFooter"></mall-footer>
  </div>
</template>

<script>
import header from "components/header/header"
import footer from "components/footer/footer"
  export default {
    name: 'App',
    // 定义header和footer组件
    components:{
      "mall-header":header,
      "mall-footer":footer
    }
  }
</script>

<style scoped>

</style>

