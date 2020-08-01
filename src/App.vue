<template>
  <div id="app">
    <router-link to="/">Home</router-link>  ||
    <router-link to="/JokeList">Joke List</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import Home from '@/views/Home'
// import JokeList from '@/views/JokeList'
export default {
  name: 'App',
  components: {
    // Home,
    // JokeList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
