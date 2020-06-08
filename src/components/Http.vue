<template>
  <section class="src-components-http">
    <h2>Listado de Alumnos</h2>

    <div v-if="this.getArrayAlumnos.length">
      <table class="table">
        <tr class="titulo">
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>

        </tr>
        <tr v-for="(alumno,index) in this.getArrayAlumnos" :key="index" :class="cssEvento(index)">
          <td>{{ alumno.id}}</td>
          <td>{{ alumno.nombre }}</td>
          <td>{{ alumno.edad }}</td>
          <td>{{ alumno.email }}</td>
        </tr>
      </table>
    </div>
    <div v-else class="alert alert-danger">
          No se encontraron alumnos
      </div>
  </section>
</template>

<script lang="js">

import axios from 'axios'

  export default  {
    name: 'src-components-http',
    props: [],
    mounted () {
      this.cargarArrayAlumnos;
      //this.arrayAlumnos = this.getArrayAlumnos;

    },
    data () {
      return {
          arrayAlumnos : []
      }
    },
    methods: {

        cssEvento(index) {
          //Este return de un objeto es prque vue asi lo requiere, pero ponerlo acá queda mucho mas entendible en el codigo HTML.
          return {
              'fila-impar': (index % 2) == 0,
              'fila-par': (index % 2) != 0
          }
        },

        postAxios(post) {
          axios.post(this.url,post, { 
            'content-type' : 'application/json'
            })
            .then( res => {
              console.log(res.data)
            })
        }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-listado {
}

.fila-impar {
      color: darkslategrey;
      background-color:rgb(184, 184, 184);
  }

.fila-par {
      color: darkslategrey;
      background-color:rgb(212, 211, 211);
  }

  .titulo {
    color: white;
    background-color: rgb(96, 97, 97);
  }

</style>
