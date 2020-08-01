import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue'
import JokeList from '@/views/JokeList.vue'

Vue.use(VueRouter);

export default new VueRouter({
    base: '/',
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: Home 
        },
        { 
            path: '/JokeList', 
            component: JokeList
        },
    ]
});