import { createApp } from 'vue'
import { createRouter, createWebHashHistory} from 'vue-router'

import App from './App.vue'
import Home from './page/Home.vue'
import Restaurant from './page/Restaurant.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/restaurant', component: Restaurant},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const VueApp = createApp(App)
VueApp.use(router)
VueApp.mount('#app')

// createApp(App).use(router).mount('#app')
