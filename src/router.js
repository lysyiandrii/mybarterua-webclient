import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from './components/HelloWorld.vue';
import Planner from "./components/Planner.vue";
import About from "./components/About";

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: HelloWorld },
	{ path: '/about', component: About },
	{ path: '/planner', component: Planner },
];

export default new VueRouter({
	routes,
});
