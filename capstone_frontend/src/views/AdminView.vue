<template>
  <div class="admin">
    <h1>Admin</h1>
      <button id="modal" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
            <label for="firstName" class="form-label">Surname</label>
            <input type="text" class="form-control" id="surname" required>
            <label for="firstName" class="form-label">staff number</label>
            <input type="number" class="form-control" id="staffNo" required>
            <label for="firstName" class="form-label">Department</label>
            <input type="text" class="form-control" id="department" required>
            <label for="firstName" class="form-label">Age</label>
            <input type="text" class="form-control" id="age" required>
            <label for="firstName" class="form-label">Image</label>
            <input type="url" class="form-control" id="image" required>
            <label for="firstName" class="form-label">Role</label>
            <input type="text" class="form-control" id="role" required>
            <label for="firstName" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" required>
            <label for="firstName" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" required>

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <div class="container products mb-5 p-3 shadow rounded-3 overflow-auto">
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
            <td>{{ user.empImg }}</td>
            <td>{{ user.empRole }}</td>
            <td>{{ user.empEmail }}</td>

            <td>
              <button class="btn btn-primary">Edit</button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

           <button id="modal" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal1">
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
            <label for="firstName" class="form-label">staff number</label>
            <input type="number" class="form-control" id="staffNo" required>
            <label for="firstName" class="form-label">SalaryID</label>
            <input type="text" class="form-control" id="salary" required>
            <label for="firstName" class="form-label">Amount</label>
            <input type="number" class="form-control" step=".01" id="amount" required>
        

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
            <td>
              <button class="btn btn-primary">Edit</button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
          <button id="modal" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2">
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
            <label for="firstName" class="form-label">staff number</label>
            <input type="number" class="form-control" id="staffNo" required>
            <label for="firstName" class="form-label">LeaveID</label>
            <input type="number" min="2" maxlength="4" class="form-control" id="leave" required>
                 <label for="datemax" class="form-label">Date</label>
            <input type="date" class="form-control" id="datemax" name="datemax" required>
                   <label for="firstName" class="form-label">Reason for absence</label>
            <input type="text" class="form-control" id="reason" required>
        

          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <div class="container products mb-5 p-3 shadow rounded-3 overflow-auto">
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
              <button id="leaveBtn" class="btn btn-primary">Edit</button>
              <button id="leaveBtn" class="btn btn-danger">Delete</button>
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
</style>
