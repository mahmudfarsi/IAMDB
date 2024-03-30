import './assets/main.css'
import './assets/tailwind.css'


import { createApp } from 'vue'

import App from './App.vue'
import Router from './router/router.js'
import Pinia from './store.js'




const app = createApp(App);


app.use(Router);
app.use(Pinia);

app.mount('#app')
