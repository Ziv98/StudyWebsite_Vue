<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Home from './view/Home.vue'
  export default {
    name: 'App',
    view: {
      Home
    }
  }
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>