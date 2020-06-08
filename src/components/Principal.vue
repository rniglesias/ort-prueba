<template>

  <section class="src-components-principal">

    <h1>Componente Principal</h1>

    <Navbar />
    <router-view></router-view>
  </section>

</template>

<script lang="js">

import Navbar from "./Navbar.vue";
  export default  {
    name: 'src-components-principal',
    components: {
      Navbar,
    },
    props: [],
    mounted () {
      // Cargo el array
      //this.cargarArrayAlumnos;

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-principal {

  }
</style>
