<template>
    <div class="mb-0">
<h1>Admin</h1>
<div class="container products mt-5 p-3 shadow rounded-3 overflow-auto">
    <h4>Employees</h4>
    <table class="table">
        <thead>
            <tr >
                
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

                    <td>{{user.staffNo}}</td> 
<td>{{user.firstName}}</td>
                     <td>{{user.surname}}</td>
                     <td>{{user.empPwddepartment}}</td> 
                     <td>{{user.empAge}}</td>  
                <td>{{user.empImg}}</td>  
                <td>{{user.empRole}}</td>
                <td>{{user.empEmail}}</td>
            
                <td><button  class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
                </td>         </tr>
            
        
        </tbody>
    </table>
</div>
<div></div>
<div class="container products mt-5 p-3 shadow  rounded-3 overflow-auto">
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
                    {{money.salaryID}}</td> 
                <td> {{money.staffNo}}</td>  
                <td>R {{money.amount}}</td>
                <td><button  class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
                </td>         </tr>
        </tbody>
    </table>
</div>
<div class="container products mt-5 p-3 shadow rounded-3 overflow-auto">
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
                <td>{{leave.LeaveID}}</td> 
                <td>{{leave.staffNo}}</td> 
                 <td>{{leave.leavedays}}</td>   
                 <td>{{leave.leaveReason}}</td> 
                <td><button  class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
                </td>         </tr>
        </tbody>
    </table>
</div>
    </div>
</template>

<script>


export default {
    computed:{
        workers(){
            return this.$store.state.workers
            
        },
            Salary(){
            return this.$store.state.pay
            },
        leaveDays(){
            return this.$store.state.days
        }
    },
    mounted(){
        this.$store.dispatch('fetchEmployees')
    this.$store.dispatch('fetchSalary')
    this.$store.dispatch('fetchDays')
    }
 
}
</script>
<style  scoped>

</style>