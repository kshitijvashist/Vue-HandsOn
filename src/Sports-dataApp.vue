<template>
  <div id="app">
    <sports-data v-bind:sports="sports" />
  
  </div>
</template>

<script>
import Sports from './components/sports-data.vue'

export default {
  name: 'app',
  components: {
    Sports
  },
  data(){
      return{
          sports:'Football,Cricket'
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
  margin-top: 60px;
}
</style>
