<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './page/home.vue'

export default {
  name: 'App',
  components: {
    Home,
  }
}
    Home
</script>

<style lang="scss">
@import url('./style/reset.scss');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  padding: 20px;
}
</style>
