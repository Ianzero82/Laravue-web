import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios"

import './assets/main.css'

axios.defaults.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.baseURL = "http://127.0.0.1:8002/api/v1/"
// axios.defaults.baseURL = "http://10.0.0.87:8001/api/v1/"

const app = createApp(App)

app.use(router)

app.mount('#app')



