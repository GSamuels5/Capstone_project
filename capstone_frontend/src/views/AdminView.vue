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
                          <th scope="col">Email</th>
                          <th scope="col">Password</th>
                          <th scope="col">Action</th>

            </tr>
        </thead>
        <tbody>
            <div v-if="workers">

                 <tr v-for="user in workers" :key="user.staffNo">

                    <td>{{worker}}</td> 
<td></td>
                     <td></td>
                     <td></td> 
                     <td></td>  
                <td></td>  
                <td></td>
                <td><button>Edit</button>
                <button>Delete</button>
                </td>         </tr>
            
            </div>
        </tbody>
    </table>
</div>
<div>{{workers}}</div>
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
        <tbody>
            <tr>
                <td></td> 
                <td></td>  
                <td></td>
                <td><button>Edit</button>
                <button>Delete</button>
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
        <tbody>
             <tr>
                <td></td> 
                <td></td> 
                <td></td>  
                <td></td>
                <td><button>Edit</button>
                <button>Delete</button>
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
        }
    }
 
}
</script>
<style  scoped>

</style>