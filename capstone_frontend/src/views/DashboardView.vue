<template>
  <div class="about">
    <h1>This is a Dashboard</h1>
    <div>
      <h3>Daily Tasks</h3>
      <!-- Input for adding new tasks -->
      <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task...">
      
      <!-- List of tasks -->
      <ul>
        <li v-for="(task, index) in tasks" :key="index" :class="{ 'completed': task.completed }">
          <input type="checkbox" v-model="task.completed">
          <span :style="{ 'text-decoration': task.completed ? 'line-through' : 'none' }">{{ task.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '', // Input field for new task
      tasks: [     // Array to store tasks
        { name: 'Task 1', completed: false },
        { name: 'Task 2', completed: true }
        // Add more tasks as needed
      ]
    };
  },
  methods: {
    // Add new task
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ name: this.newTask, completed: false });
        this.newTask = ''; // Clear input field after adding task
      }
    }
  }
};
</script>

<style scoped>
.completed {
  text-decoration: line-through; /* Add line-through style for completed tasks */
}
</style>
