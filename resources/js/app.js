import './bootstrap';
import '../sass/app.scss';
import {createApp} from 'vue/dist/vue.esm-bundler.js';
import * as VueRouter from 'vue-router';
import MainCom from './Components/MainComponent.vue';
import UploadComponent from './Components/UploadComponent.vue';


const routes = [
    { path: '/', component: MainCom },
    { path: '/fileUpload', component: UploadComponent },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory('/'),
    routes
})



const app = createApp({
    components: {
        'main-com': MainCom,
    }
})
app.use(router)
app.mount("#app")
