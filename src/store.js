import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        contador : 1234,
        url: 'https://5eb42f9d2b81f70016308293.mockapi.io/alumnos',
        arrayAlumnos: []
    },
    actions : {
        contarUp({commit}, cant) {
            commit('incrementar',cant)
        },
        contarDown({commit}, cant) {
            commit('decrementar',cant)
        },
        actionCargarArrayDeAlumnos({commit})
        {
            commit('mutationCargarArrayDeAlumnos')
        },
        actionPostearAlumnoAxios({commit}, post)
        {
            commit('mutationPostearAlumnoAxios', post)
        }

    },
    mutations : {
        incrementar(state, cant) {
            state.contador += cant
        },

        decrementar(state, cant) {
            state.contador -= cant
        },

        mutationCargarArrayDeAlumnos(state) {
            console.log("intento cargar array")
            console.log("desde: ", state.url)
            console.log("cargando...")
            axios.get(state.url)
                .then ( res => {
                    console.log("Obtuve estos datos:")
                    console.log(res.data)
                    state.arrayAlumnos = res.data
            })
        },

        mutationPostearAlumnoAxios(state, post){
            
                axios.post(state.url, post, { 
                  'content-type' : 'application/json'
                  })
                  .then( res => {
                    console.log("Se cargo esta info: ")
                    console.log(res.data)
                  })
              
        }
    }
})
