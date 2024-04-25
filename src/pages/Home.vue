<script setup>
import { ref, onMounted } from 'vue'

const tasks = ref([])
const text = ref('')
const currentTask = ref({})

const addTask = (event) => {
    tasks.value.push({id: Math.random(), text: text.value, checked: true})
	text.value = ''
}

const removeTask = (id) => {
  const newArray = tasks.value.filter(item => item.id !== id)
  tasks.value = newArray;
  currentTask.value = {}
}

</script>

<template>
	<div class="wrap">
		<div class="content">
			<h2>Задачи</h2>
			<div @click="currentTask=task" class="task-item" v-for="task in tasks" :key="task.text">
				<input v-model="task.checked" type="checkbox">
				<span :class="{'complete': task.checked}" class="task-text">{{ task.text }}</span>
				<span class="task-user">{{ task.user }}</span>
				<button @click="removeTask(task.id)">x</button>
			</div>

			<input @keyup.enter="addTask" v-model="text" class="input" type="text">
		</div>
		<div v-if="currentTask?.id" class="detail">
			<div @click="currentTask={}" class="close">x</div>
			<input v-model="currentTask.text" type="text">
			<div class="step">
				<input type="checkbox">
				<input type="text" placeholder="Add step">
				<div v-if="currentTask.checked" class="v-line"></div>
			</div>
			<div class="step">
				<input type="checkbox">
				<input type="text" placeholder="Add step">
			</div>
			

			<textarea class="textarea"></textarea>
			<div class="author">{{ currentTask.user }}</div>
		</div>

	</div>
</template>

<style scoped> 
.step {
	position: relative;
	display: flex;
	align-items: center;
	gap: 5px;
}

.v-line {
	position: absolute;
    top: 15px;
    left: 10px;
    height: 10px;
    width: 1px;
    background-color: rgb(41, 118, 241);
}
.wrap {
	height: 100%;
	display: flex;
}

.complete {
	text-decoration: line-through;
}

.content {
	padding: 15px;
	display: flex;
	flex-direction: column;
	width: 100%;
}
.detail {
	display: flex;
	flex-direction: column;
	padding: 10px;
	width: 400px;
 	background-color: #7FC7D9;
 }

 .close {
	margin-left: auto;
	font-size: 24px;
	cursor: pointer;
 }
 .textarea {
	width: 100%;
 }

 .author {
	margin-top: auto;
 }

 .input {
 	margin-top: auto;
 	margin-bottom: 10px;
 	height: 40px;
 }

 .task-item {
 	display: flex;
 	align-items: center;
 	justify-content: space-between;
	gap: 5px;
 	background-color: #f2f2f2;
 	padding: 10px 20px;
 	margin-bottom: 5px;
 	border-radius: 5px;
 	transition: background-color 0.3s ease;
 }

 .task-item:hover {
 	background-color: #e0e0e0;
 }

 .task-text {
	margin-right: auto;
 	font-size: 16px;
 	font-weight: 500;
 	color: #333;
 }

 .task-user {
 	font-size: 14px;
 	font-weight: 400;
 	color: #666;
 }
</style>