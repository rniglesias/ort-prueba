<template>

  <section class="src-components-formulario">
    <div class="jumbotron mt-3">
    <h2>Carga de Alumnos</h2>
    <hr>

    <vue-form :state="formState" @submit.prevent="enviar()">


      <validate tag="div" class="titulo">
        <label for="nombre" class="titulo">Nombre</label>
        <input 
          type="text"
          id="nombre"
          class="form-control"
          autocomplete="off"
          name="nombre"
          placeholder="Ingrese el nombre del alumno"
          v-model.trim="formData.nombre"
          required
          :minlength="largoNombreMin"
          :maxlength="largoNombreMax"
        >
        <field-messages name="nombre" show="$dirty">
          <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>
          <div slot="minlenght" class="alert alert-danger my-1">El nombre debe tener al menos {{largoNombreMin}} caracteres</div>
          <div slot="maxlenght" class="alert alert-danger my-1">El nombre no debe superar los {{largoNombreMax}} caracteres</div>
        </field-messages>


      </validate>
      <br>



      <validate tag="div" class="titulo">
        <label for="edad">Edad</label>
        <input 
          type="number"
          id="edad"
          class="form-control"
          autocomplete="off"
          name="edad"
          placeholder="Ingrese edad del alumno"
          v-model.number="formData.edad"
          required
          :min="edadMin"
          :max="edadMax"
        >
        <field-messages name="edad" show="$dirty">
          <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
          <div slot="required" class="alert alert-danger my-1">Campo edad requerido</div>
          <div slot="min" class="alert alert-danger my-1">La edad minima es de {{edadMin}} años</div>
          <div slot="max" class="alert alert-danger my-1">La edad máxima es de {{edadMax}} años</div>
        </field-messages>

      </validate>        
      <br>

      <validate tag="div" class="titulo">
        <label for="email">Email</label>
        <input 
          type="email"
          id="email"
          class="form-control"
          autocomplete="off"
          name="email"
          placeholder="Ingrese email del alumno"
          v-model="formData.email"
          required
        >
      </validate>
      <br>

      <!-- <button class="btn btn-success my-4" :disabled="enviando" type="submit">Enviar</button> -->
      <button class="btn btn-success my-4" :disabled="formState.$invalid" type="submit">Enviar</button>

    </vue-form>

    <!-- <pre>{{formState}}</pre> -->

  </div>
  </section>

</template>

<script lang="js">

import axios from 'axios'

export default {
  name: 'src-components-formulario',
  components: {},
  props: [],
  data () {
    return {
      url: 'https://5eb42f9d2b81f70016308293.mockapi.io/alumnos',
      formState : {},
      formData : this.getInitialData(),
      enviando: false,
      edadMin: 18,
      edadMax: 120,
      largoNombreMin: 5,
      largoNombreMax: 15
    }
  },
  computed: {

  },
  mounted () {
    
  },
  methods: {

    getInitialData() {
      return {
        nombre: '',
        edad: '',
        email: ''
      }
    },
    enviar() {
      this.enviando = true
      
      // Armo el post a enviar con los datos del formulario
      let post = {
        nombre: this.formData.nombre,
        edad: this.formData.edad,
        email: this.formData.email
      }
      
      // Lo envio
      //this.postAxios(post)
      this.postearAlumnoAAxios(post)

      // Reseteo
      this.formData = this.getInitialData()
      this.formState._reset()

      setTimeout(() => {
        this.enviando = false
      },2000)
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

 
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }

  .titulo {
    text-align: left;
  }

</style>
