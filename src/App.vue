<template>
  <div id="app">
    <NavBar/>
    <h1 class="page-title">{{ this.pageTitle }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-title {
  text-align: left;
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  padding-left: 1rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  width: 100%;
}
</style>
