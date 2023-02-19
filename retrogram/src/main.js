import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import unsplash from "vue-unsplash";

import './assets/custom.scss'

const app = createApp(App)

app.use(router).use(unsplash, { accessKey: "1lcVAWolEEh-sc_5lcIE6WfV-fxcw82dSaCxOWKnVqo"}).mount('#app')

