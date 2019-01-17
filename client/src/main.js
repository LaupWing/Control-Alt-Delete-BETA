import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import StartScherm from './components/paginas/allePaginas/Startscherm.vue'

import Woonplaats from './components/paginas/allePaginas/Woonplaats.vue'
import PolitieGeweldVraag from './components/paginas/allePaginas/PolitiegeweldVraag.vue'
import MeerOfMinder from './components/paginas/allePaginas/MeerOfMinder.vue'
import SoortGeweld from './components/paginas/allePaginas/SoortGeweld.vue'
import Welkom from './components/paginas/allePaginas/Welkom.vue'
import Tevredenheid from './components/paginas/allePaginas/Tevredenheid.vue'
import TevredenResultaat from './components/paginas/allePaginas/TevredenResultaat.vue'
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
    {path: '/meerofminder', component:  MeerOfMinder},
    {path: '/soortgeweld', component: SoortGeweld},
    {path: '/welkom', component: Welkom},
    {path: '/tevredenheid', component: Tevredenheid},
    {path: '/tevredenheidResultaat', component: TevredenResultaat},
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
