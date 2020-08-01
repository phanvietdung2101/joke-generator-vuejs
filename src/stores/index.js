import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allJokes: [],
        currentJoke: 'This is a joke',
    },
    mutations: {
        setCurrentJoke (state, payload) {
            state.currentJoke = payload;
            state.allJokes.push(payload);
        }
    },
    getters: {
        getCurrentJoke: state => state.currentJoke
    },
    actions: {}
});