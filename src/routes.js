import Vue from  'vue'
import VueRouter from 'vue-router'

//import Principal from "./components/Principal.vue";
import Inicio from "./components/Inicio.vue";
import Navbar from "./components/Navbar.vue";
import Formulario from "./components/Formulario.vue";
import Http from "./components/Http.vue";

Vue.use(VueRouter)


export default new VueRouter({
    mode: 'history',
    routes: [
      {path: '/', redirect: '/inicio'},
      {path: '/inicio', component: Inicio},
      {path: '/navbar', component: Navbar},
      {path: '/formulario', component: Formulario},
      {path: '/http', component: Http}
    ]
})

  