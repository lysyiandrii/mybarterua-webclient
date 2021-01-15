<template>
	<div class="taskList">
		<div class="taskListHeader">
			<div>{{ title }}</div>
			<div>{{ totalTime }}</div>
		</div>
		<div class="taskListBody" v-for="task in tasks" v-bind:key="task.id">
			<div class="taskListBody__item">
				<div>{{ task.description }}</div>
				<div>{{ task.time }}</div>
				<div v-on:click="handleRemove(task.id)">x</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		tasks: {
			type: Array,
			required: true,
		},
	},
	computed: {
		totalTime() {
			return this.tasks.reduce((total, currentTask) => {
				total += currentTask.time;
				return total;
			}, 0);
		},
	},
	methods: {
		handleRemove(taskId) {
			this.$emit("remove-task", taskId);
		},
	},
};
</script>

<style lang="scss">
	.taskList {
		border: 1px solid black;

		.taskListHeader {
			display: flex;
			justify-content: space-between;
		}

		.taskListBody {
			&__item {
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>