<template>
  <div class="admin">
    <h1>Admin</h1>
      <button id="modal" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="setUserModal">
        Add user</button>
      <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade text-black " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add a user</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
       <div class="modal-body">
        <form @submit.prevent="addUser">
          <div class="mb-3">
            <label for="firstName" class="form-label">First name</label>
            <input type="text" class="form-control" id="firstName" required>
            <label for="surname" class="form-label">Surname</label>
            <input type="text" class="form-control" id="surname" required>
            <label for="staffNo" class="form-label">staff number</label>
            <input type="number" min="001" max="999" class="form-control" id="staffNo" required>
            <label for="department" class="form-label">Department</label>
            <input type="text" class="form-control" id="department" required>
            <label for="age" class="form-label">Age</label>
            <input type="number" maxlength="100" class="form-control" id="age" required>
            <label for="firstName" class="form-label">Image</label>
            <input type="url" class="form-control" id="image" required>
            <label for="firstName" class="form-label">Role</label>
            <ul class="dropdown-menu bg-dark">
              <li>
<button value="admin" class="dropdown-item" @click="setRole">Admin</button>
              </li>
              <li>
<button  value="user" class="dropdown-item" @click="setRole">User</button>
              </li>
            </ul>
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" required>
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" required>

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="userModalSubmit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
    <div class="container users mb-5 p-3 shadow rounded-3 overflow-auto">
      <h4>Employees</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">staffNo</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Department</th>
            <th scope="col">Age</th>
            <th scope="col">Image</th>
            <th scope="col">Role</th>

            <th scope="col">Email</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-if="workers">
          <tr v-for="user in workers" :key="user.staffNo">
            <td>{{ user.staffNo }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.surname }}</td>
            <td>{{ user.empPwddepartment }}</td>
            <td>{{ user.empAge }}</td>
            <td><a :href="user.empImg">{{ user.empImg }}</a></td>
            <td>{{ user.empRole }}</td>
            <td>{{ user.empEmail }}</td>

            <td class="d-flex">
              <button class="btn btn-primary" data-bs-target="#exampleModal" data-bs-toggle="modal" @click="editUser" :value="user.staffNo">Edit</button>
              <button class="btn btn-danger" @click="deleteUser" :value="user.staffNo">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

           <button id="modal" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1" @click="setPayModal">
        Add user salary</button>
      <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade text-black" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add the user's salary</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
       <div class="modal-body">
        <form @submit.prevent="addSalary">
          <div class="mb-3">
            <label for="staffNo" class="form-label">staff number</label>
            <input type="number" min="001" max="999" class="form-control" id="staffNo" required>
            <label for="salary" class="form-label">SalaryID</label>
            <input type="text" class="form-control" id="salary" required>
            <label for="firstName" class="form-label">Amount</label>
            <input type="number" class="form-control" step=".01" id="amount" required>
        

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" @click="salaryModalSubmit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
    <div class="container products mb-5 p-3 shadow rounded-3 overflow-auto">
      <h4>Salary</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">staffNo</th>
            <th scope="col">SalaryID</th>
            <th scope="col">Amount</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-if="Salary">
          <tr v-for="money in pay" :key="money.salaryID">
            <td>
              {{ money.salaryID }}
            </td>
            <td>{{ money.staffNo }}</td>
            <td>R {{ money.amount }}</td>
            <td class="d-flex">
              <button class="btn btn-primary" data-bs-target="exampleModal1" data-bs-toggle="modal" @click="editSalary" :value="money.salaryID">Edit</button>
              <button class="btn btn-danger" @click="deleteSalary" :value="money.salaryID">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
          <button id="modal" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2" @click="setLeaveModal">
        Add user leave</button>
      <!-- Button trigger modal -->

<!-- Modal -->
<div class="modal fade text-black" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add the users leave</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
       <div class="modal-body">
        <form @submit.prevent="addLeave">
          <div class="mb-3">
            <label for="staffNo" class="form-label">staff number</label>
            <input type="number" class="form-control" min="001" max="999" id="staffNo" required>
            <label for="leave" class="form-label">LeaveID</label>
            <input type="number" min="1000" max="9998" class="form-control" id="leave" required>
                 <label for="datemax" class="form-label">Date</label>
            <input type="date" class="form-control" id="datemax" name="datemax" required>
                   <label for="reason" class="form-label">Reason for absence</label>
            <input type="text" class="form-control" id="reason" required>
        

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" @click="leaveModalSubmit">Submit</button>
      </div>
    </div>
  </div>
</div>
    <div class="container leave mb-5 p-3 shadow rounded-3 overflow-auto">
      <h4>Leave</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">staffNo</th>
            <th scope="col">LeaveID</th>
            <th scope="col">Date</th>
            <th scope="col">Reason</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-if="leaveDays">
          <tr v-for="leave in days" :key="leave.LeaveID">
            <td>{{ leave.LeaveID }}</td>
            <td>{{ leave.staffNo }}</td>
            <td>{{ leave.leavedays }}</td>
            <td>{{ leave.leaveReason }}</td>
            <td>
              <button id="leaveBtn" class="btn btn-primary" @click="editLeave" :value="leave.leaveID">Edit</button>
              <button id="leaveBtn" class="btn btn-danger" @click="deleteLeave" :value="leave.leaveID">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    workers() {
      return this.$store.state.workers;
    },
    Salary() {
      return this.$store.state.pay;
    },
    leaveDays() {
      return this.$store.state.days;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEmployees");
    this.$store.dispatch("fetchSalary");
    this.$store.dispatch("fetchDays");
  },
};
</script>
<style scoped>
#modal{
  width: 15%;
  height: 50%;
  border-radius: 25% 25% 0 0;
  color: black;
  font-weight: bold;
}
.leave{
      background-color: rgb(27, 238, 69);
}
 .users{
      background-color: rgb(27, 238, 69);
}
 .products{
      background-color: rgb(27, 238, 69);
}
</style>
