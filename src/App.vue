<template>
  <div id="app">
	<router-link to="/">Home</router-link>
	<router-link to="/about">About</router-link>
	<router-link to="/planner">Planner</router-link>
    <img alt="Vue logo" src="./assets/logo.png">
	<router-view />
	<News />
  </div>
</template>

<script>
import "./components/News";

export default {
	name: 'App',
}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
