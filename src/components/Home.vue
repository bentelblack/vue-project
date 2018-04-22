<template>
  <div class="app-container">
    <!-- use vuex  -->
    <h1>{{ this.$store.state.name }}</h1>
    <h3>{{ msg }}</h3>

  </div>  
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Home Page'
      }
    }
  }
</script>
<style lang="scss" scoped>
  h1 {
    color: red;
  }
</style>
