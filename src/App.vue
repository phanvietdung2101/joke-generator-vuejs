<template>
  <div id="app">
    <div id="navbar">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-row type="flex" justify="center">
          <el-col :span="3">
            <el-menu-item index="1">
              <router-link to="/">Home</router-link>
            </el-menu-item>
          </el-col>
          <el-col :span="3">
            <el-menu-item index="2">
              <router-link to="/JokeList">JokeList</router-link>
            </el-menu-item>
          </el-col>
        </el-row>
      </el-menu>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
