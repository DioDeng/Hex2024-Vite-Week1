import './assets/stylesheets/all.scss'

import { createApp } from 'vue'
import 'bootstrap'
import mitt from 'mitt' // Import mitt
const emitter = mitt()
import App from './App.vue'

const app = createApp(App)

app.provide('emitter', emitter)
app.mount('#app')
