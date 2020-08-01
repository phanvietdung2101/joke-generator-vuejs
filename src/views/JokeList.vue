<template>
  <div>
    <h1>Joke List</h1>
    <h3 v-for="(joke,index) in jokes" :key="index">{{ joke }}</h3>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      jokeList: [],
    };
  },
  computed: {
    jokes() {
      return this.$store.getters.getAllJokes;
    },
  },
  methods: {
    ...mapMutations({ setJokeListFromStorage: 'setJokeList' })
  },
  beforeDestroy () {
      localStorage.setItem('jokes',JSON.stringify(this.jokes));
  },
  mounted () {
    this.setJokeListFromStorage();
  },
};
</script>
