import Vue from "vue";

var miMixin = {
  methods: {
    getUrl() {
      return this.$store.state.url
    },

    postearAlumnoAAxios(post)
    {
      this.$store.dispatch('actionPostearAlumnoAxios', post)
    }

  },
  computed: {
    mostrarContadorVuex() {
      //this.$emit('contador',this.contador)
      //return this.contador
      console.log('mostrarContadorVuex: Mixin global')
      return this.$store.state.contador;
    },

    getArrayAlumnos() {
      return this.$store.state.arrayAlumnos;
    },

    cargarArrayAlumnos()
    {
      this.$store.dispatch('actionCargarArrayDeAlumnos')
    }
  },
  created() {
    console.log('created: Mixin global')
  }

}

Vue.mixin(miMixin)
