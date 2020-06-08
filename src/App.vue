<template>
  <div id="app" class="container">
    <div class="jumbotron mt-3">

   
      <Principal />


    </div>
  </div>
</template>

<script>
import Principal from "./components/Principal.vue";

export default {
  name: 'App',
  components: {
    Principal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
