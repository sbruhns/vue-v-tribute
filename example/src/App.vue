<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <SimpleInputExample :tributeValues="users" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SimpleInputExample from './components/SimpleInputExample.vue';

export default Vue.extend({
  name: 'App',
  components: {
    SimpleInputExample,
  },
  data() {
    return {
      users: [
        { name: 'Stefan Bruhns', username: 'sbruhns' },
        { name: 'Max Mustermann', username: 'madmax' },
      ],
    };
  },
});
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
