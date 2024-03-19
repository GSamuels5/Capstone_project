<template>
  <div class="about vh-100">
    <h1>Dashboard</h1>
    <div>
      <h3>Daily Tasks</h3>
      <!-- Input for adding new tasks -->
      <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task...">
      
      <!-- List of tasks -->
      <ul>
        <li id="list" v-for="(task, index) in tasks" :key="index" :class="{ 'completed': task.completed }">
          <input type="checkbox" v-model="task.completed" >
          <span @click="toggleTask(index)">{{ task.name }}</span>
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
      tasks: JSON.parse(localStorage.getItem('tasks')) || []
    };
  },
 
  methods: {
    // Add new task
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ name: this.newTask, completed: false });
        this.newTask = ''; // Clear input field after adding task
        this.saveTask()
      }
    },
  
  toggleTask(index){
    this.tasks[index].completed = !this.tasks[index].completed
    if(this.tasks[index].completed){
      this.tasks.splice(index,1) 
      // remove task if completed
    }
    this.saveTask()
  },
  saveTask(){
    // save to local storage
    localStorage.setItem('tasks', JSON.stringify(this.tasks))
  }
}}
</script>

<style scoped>
.about{
margin: 0 auto;
padding: 20px;
}
h1{
  text-align: center;
  margin-bottom: 20px;
}
h3{
  margin-bottom: 10px;
}
input[type="text"]{
width: 80%;
padding: 10px;
margin-bottom: 10px;
border-radius: 5px;
border: 1px solid black
}

.completed {
  text-decoration: line-through; /* Add line-through style for completed tasks */
  cursor: pointer;
}
ul{
  list-style: none;
}

</style>
