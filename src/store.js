import Vue from 'vue';
import Vuex from 'vuex';
import { STATUS_NEW, STATUS_IN_PROGRESS } from "./enums/taskStatus";

Vue.use(Vuex);

export default  new Vuex.Store({
	state: {
		tasks: [{
			id: "task1",
			description: "task 1",
			status: STATUS_NEW,
			time: 10,
		}, {
			id: "task2",
			description: "task 2",
			status: STATUS_NEW,
			time: 14,
		}, {
			id: "task3",
			description: "task 3",
			status: STATUS_IN_PROGRESS,
			time: 5,
		}, {
			id: "task4",
			description: "task 4",
			status: STATUS_IN_PROGRESS,
			time: 3,
		}]
	},
	getters: {
		getNewTasks(state) {
			return state.tasks.filter((task) => task.status === STATUS_NEW);
		},
		getInProgressTasks(state) {
			return state.tasks.filter((task) => task.status === STATUS_IN_PROGRESS);
		}
	},
	mutations: {
		removeTask (state, taskId) {
			console.log(taskId);
			const taskIdToRemove = state.tasks.findIndex((task) => task.id === taskId);
			state.tasks.splice(taskIdToRemove, 1);
		}
	},
	actions: {
		removeTask (context, taskId) {
			context.commit("removeTask", taskId);
		}
	}
});