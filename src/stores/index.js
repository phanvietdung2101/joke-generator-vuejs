import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

// const url = "https://icanhazdadjoke.com/";

export default new Vuex.Store({
    state: {
        allJokes: [],
        currentJoke: 'This is a joke',
    },
    mutations: {
        setCurrentJoke(state, payload) {
            state.currentJoke = payload;
            state.allJokes.push(payload);
        },
        setJokeList(state) {
            // get joke list from local storage
            const jokeList = JSON.parse(localStorage.getItem('jokes'));
            state.allJokes = jokeList;
        }
    },
    getters: {
        getCurrentJoke: state => state.currentJoke,
        getAllJokes: state => state.allJokes
    },
    actions: {
        // async
        async setCurrentJoke(state) {
            await axios({
                "method": "GET",
                "url": "https://dad-jokes.p.rapidapi.com/random/jokes",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
                    "x-rapidapi-key": "0350f62424msh45f58ebd7a09bd1p1cbd37jsn4a2679326399",
                    "useQueryString": true
                }
            })
                .then((response) => {
                    const data = response.data;
                    state.commit('setCurrentJoke', data.setup + '  ' + data.punchline);
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    }
})