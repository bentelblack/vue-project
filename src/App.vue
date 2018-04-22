<template>
  <div class="app-container">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>  
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hello Vue'
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>
