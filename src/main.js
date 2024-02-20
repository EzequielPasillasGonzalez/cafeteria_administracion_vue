import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login';

import './styles/styles.scss'
import store from './store'

createApp(App)
        .use(store)
        .use(vue3GoogleLogin, { clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID })
        .use(router)
        .mount('#app')
