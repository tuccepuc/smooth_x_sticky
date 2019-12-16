<template>
  <div id="app">
    <div id="sizer"></div>
    <div id="scroller"></div>
    <div id="main"></div>
    <header-bar></header-bar>
  </div>
</template>

<script>
// import Vue from 'vue';
import HeaderBar from './components/HeaderBar.vue'

export default {
  name: 'app',
  components: {
    HeaderBar
  },
  mounted: function()
  {
    
  }
}
</script>

<style>
body
{
  margin: 0;
  position: relative;

  height: 300vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ff3333;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;

  display: block;
  position: fixed;
  width: 100vw;
  height: 100vh;
}
</style>
