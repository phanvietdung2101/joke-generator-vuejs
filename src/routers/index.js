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
            name: 'Home', 
            component: Home 
        },
        { 
            path: '/JokeList', 
            name: 'JokeList',
            component: JokeList
        },
    ]
});