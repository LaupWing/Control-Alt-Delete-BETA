import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Intro1 from './components/paginas/allePaginas/1_intro1.vue'
import Intro2 from './components/paginas/allePaginas/2_intro2.vue'
import Intro3 from './components/paginas/allePaginas/3_intro3.vue'
import Intro3_5 from './components/paginas/allePaginas/3.5_intro3.5.vue'
import Intro4 from './components/paginas/allePaginas/4_intro4.vue'
import Tool from './components/paginas/allePaginas/5_tool.vue'

// Tool components
import Geweld from './components/paginas/allePaginas/5_tool_Components/geweld.vue'
import PoltieDoden from './components/paginas/allePaginas/5_tool_Components/politiedoden.vue'
import Informatie from './components/paginas/allePaginas/5_tool_Components/informatie.vue'
import Delen from './components/paginas/allePaginas/5_tool_Components/delen.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        component: Intro1
    },
    {
        path: '/intro2', 
        component: Intro2
    },
    {
        path: '/intro3', 
        component: Intro3
    },
    {
        path: '/intro3_5', 
        component: Intro3_5
    },
    {
        path: '/intro4', 
        component:  Intro4
    },
    {
        path: '/tool', 
        component: Tool,
        children:[
            {
                path: '',
                component: Geweld
            },
            {
                path: 'politiedoden',
                component: PoltieDoden
            },
            {
                path: 'informatie',
                component: Informatie             
            },
            {
                path: 'delen',
                component: Delen             
            }
        ]
    },
]

const router = new VueRouter({
    routes,
    mode:'history'

})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
