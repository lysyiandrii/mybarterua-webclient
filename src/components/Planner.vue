<template>
	<div :class="{title: true}">
		Planner
		<ManageTask />
		<TaskList title="Plans for day" :tasks="newTasks" v-on:remove-task="handleRemoveTask" />
		<TaskList title="Tasks in Progress" :tasks="inProgressTasks" v-on:remove-task="handleRemoveTask" />
	</div>
</template>

<script>
import TaskList from "./planner/TaskList.vue"
import ManageTask from "./planner/ManageTask.vue"

export default {
	data () {
		return {
			message: "Planner1",
			tasks: [{
				id: "task1",
				description: "task 1",
				time: 10,
			}, {
				id: "task2",
				description: "task 2",
				time: 14,
			}],
		};
	},
	computed: {
		newTasks() {
			return this.$store.getters.getNewTasks;
		},
		inProgressTasks() {
			return this.$store.getters.getInProgressTasks;
		}
	},
	components: {
		TaskList,
		ManageTask,
	},
	methods: {
		handleRemoveTask(taskId) {
			this.$store.dispatch("removeTask", taskId);
		},
	},
}
</script>

<style lang="scss">
	.title {
		color: green;
	}
</style>