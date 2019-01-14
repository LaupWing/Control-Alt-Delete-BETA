import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import StartScherm from './components/paginas/allePaginas/Startscherm.vue'

import Woonplaats from './components/paginas/allePaginas/Woonplaats.vue'
import PolitieGeweldVraag from './components/paginas/allePaginas/PolitiegeweldVraag.vue'
// import Adres from './components/paginas/allePaginas/Adres.vue'
// import Veilig from './components/paginas/allePaginas/Veiligheid.vue'
// import Vraag1 from './components/paginas/allePaginas/Vraag1.vue'
// import Vraag2 from './components/paginas/allePaginas/Vraag2.vue'
// import Vraag3 from './components/paginas/allePaginas/Vraag3.vue'
// import Vraag4 from './components/paginas/allePaginas/Vraag4.vue'
// import Vraag5 from './components/paginas/allePaginas/Vraag5.vue'
// import Vraag6 from './components/paginas/allePaginas/Vraag6.vue'
// import Vraag7 from './components/paginas/allePaginas/Vraag7.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {path: '/', component: StartScherm},
    {path: '/woonplaats', component: Woonplaats},
    {path: '/politiegeweldvraag', component: PolitieGeweldVraag},
    // {path: '/adres', component: Adres},
    // {path: '/veilig', component: Veilig},
    // {path: '/vraag1', component: Vraag1},
    // {path: '/vraag2', component: Vraag2},
    // {path: '/vraag3', component: Vraag3},
    // {path: '/vraag4', component: Vraag4},
    // {path: '/vraag5', component: Vraag5},
    // {path: '/vraag6', component: Vraag6},
    // {path: '/vraag7', component: Vraag7},
]

const router = new VueRouter({
    routes,
    mode:'history'

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
