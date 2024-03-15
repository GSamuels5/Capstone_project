import { createStore } from 'vuex'
import sweet from 'sweetalert'
import {
  useCookies
} from 'vue3-cookies'
const cookies = useCookies()

import router from '@/router/index.js'
const Urldata = 'https://capstone-project-1hsh.onrender.com'

export default createStore({
  state: {

    workers: null,
    worker:null,
    pay: null,
    paid:null,
    days: null,
    day: null
  },
  getters: {
  },
  mutations: {
    setWorkers(state,value){
      state.workers = value
    }, 
    setWorker(state,value){
      state.worker = value
    },
     setPay(state,value){
      state.pay = value
    },
     setPaid(state,value){
      state.paid = value
    },
    setDays(state,value){
      state.days = value
    },
    setDay(state,value){
      state.day = value
    }
  },
  actions: {
    async fetchEmployees(context){
      try {
        let result = await fetch(`${Urldata}/workers`)
        let data = await result.json()
        if (data) {
          context.commit('setWorkers',data.result)
          
        }
        
        
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'An error occured when retrieving users.',
          icon: 'error',
          timer: 2000
        })
      }
    },
    async fetchEmployee(context, payload){
      try {
        let result = await fetch(`${Urldata}/workers/${payload.id}`)
        let data = result.json()
        if (data) {context.commit('setWorker', data)
          
        }else{
          sweet({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: 'info',
            timer: 2000
          })
        }
        
      } catch (e) {
        sweet({
          title: 'Error',
          text: 'User was not found',
          icon: 'error',
          timer: 2000
        })
      }
    },
    async updateEmployee(context, payload){
      try {
        await fetch(`${Urldata}/workers/update/${payload.staffNo}`),{
          method: "PATCH",
          header: {
            "Content-Type": "application/json"

          },
          body: JSON.stringify(payload)
        }
        sweet({
          title: "User Updated",
          text: "User updated successfully",
          icon: "success",
          timer: 2000
        })
        context.dispatch('fetchEmployees')

      } catch (e) {
        sweet({
          title: "Error",
          text: "Could not update user",
          icon: "error",
          timer:2000
        })
      }
    },
    async deleteEmployee(context, payload){
      try {
        await fetch(`${Urldata}/workers/delete/${payload}`,{
          method: "DELETE"
        })
        sweet({
          title: "User deleted",
          text: "User deleted succesfully",
          icon: "success",
          timer:2000
        })
        context.dispatch('fetchEmployees')
      } catch (e) {
        sweet({
          title: "Error",
          text:"Couldn't delete user",
          timer: 2000
        })
      }
    },
    async hireEmployee(context, payload){
      try {
        let  result = await fetch(`${Urldata}/workers/register`,{
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        })
        let data = await result.json()
        console.log(data);
        if(+data.status >= 400){
          sweet({
            title: "Error",
            text: "Could not create a user",
            icon: "error",
            timer: 2000
          })
          context.dispatch("fetchEmployees")
        }
      } catch (e) {
        console.log(e);
        sweet({
          title: "Error",
          text: "Could not create a user",
          icon: "error",
          timer: 2000
        })
        
      }
    },
    async login(context, payload){
      try {
        const response = await fetch(`${Urldata}/workers/login`,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
        const{msg,token, result} = await response.json()
        if (result) {
          context.commit("setWorker",{
            msg,
            result
          })
          cookies.set("Worker",{

            msg,
            token,
            result
          }
          )
          sweet({
            title: msg,
            text: `Welcome back,  
            ${result?.firstName} ${result?.surname}
            `,
            icon: "success",
            timer: 2000
          })
          router.push({
            name: "login"
          })
        }else{
          sweet({
            title: "info",
            text:msg,
            icon:"info",
            timer: 2000
          })
        }

        
      } catch (e) {
        sweet({
          title: "Error",
          text: 'Failed to login.',
          icon:'error',
          timer: 2000
        })
      }

    },
    async fetchDays(context){
      try {
      let result = await fetch(`${Urldata}/leave`) 
      let data = await result.json()
      context.commit("setDays",data.result) 
      } catch (e) {
        console.log(e);
      }
    },
    async fetchDay(context,payload){
      try {
        let result = await fetch(`${Urldata}/leave/${payload.id}`)
        let data = await result.json()
        if(data){
          context.commit("setDay", data)
        }else{
          sweet({
            title: "Retrieving a a leave day",
            text: "No leave available",
            icon: "info",
            timer: 2000
          })
        }
      } catch (e) {
        
          sweet({
            title: "Error",
            text: "leave day could not be accessed",
            icon: "error",
            timer: 2000

          })
        }},
        async addleave(context, payload){
          try {
            let result = await fetch(`${Urldata}/leave/addleave`,{
              method: "POST",
              headers:{
                "Content-Type":"applicaation/json"
              },
              body: JSON.stringify(payload)
            })
            let data = await result.json()
            console.log('ad', data)
            context.dispatch("fetchDays");
          } catch (e) {
            console.log(e);
            sweet({
              title:'Error',
              text: 'Failed to add a leave day',
              icon: 'error',
              timer: 2000
            })
            
          }
        },
        async updateLeave(context, payload){
try {
  let result = await fetch(`${Urldata}/leave/update/${payload.staffNo}`,{
    method: "PATCH",
    headers:{
      "Content-Type":"application/json"
   },
   body: JSON.stringify(payload)
  })
  let data = await result.json()
  console.log(data);
  context.dispatch('fetchDays')
  sweet({
    title:'leave day changed',
    text: 'leave day updated',
    icon: 'successs',
    timer: 2000
  })
} catch (e) {
  sweet({
    title: 'Error',
    text: "Could not update leave",
    icon: 'error',
    timer:2000
  })
}
        },
        async deleteLeave(context, payload){
          try {
            let result = await fetch(`${Urldata}/leave/delete/${payload}`,{
              method: "DELETE"
            })
            let data = await result.json()
            console.log(data);
            context.dispatch('fetchDays')
            sweet({
              title: "Leave day was deleted",
              text: "leave removed succesfully",
              icon: "success",
              timer: 2000
            })
          } catch (e) {
            sweet({
              title: "Error",
              text: "Error occured while trying to delete leave",
              icon: "error",
              timer: 2000
            })
          }
         
            context.commit('setDays', payload)
          
        },  
        // fetching salary table 
         async fetchSalary(context){
          try {
          let result = await fetch(`${Urldata}/salary`) 
          let data = await result.json()
          context.commit("setPay",data.result) 
          } catch (e) {
            console.log(e);
          }
        },
        async fetchpay(context,payload){
          try {
            let result = await fetch(`${Urldata}/salary/${payload.id}`)
            let data = await result.json()
            if(data){
              context.commit("setPaid", data)
            }else{
              sweet({
                title: "Retrieving your salary",
                text: "No salary available",
                icon: "info",
                timer: 2000
              })
            }
          } catch (e) {
            
              sweet({
                title: "Error",
                text: "salary could not be accessed",
                icon: "error",
                timer: 2000
    
              })
            }},
            async newSalary(context, payload){
              try {
                let result = await fetch(`${Urldata}/salary/addpay`,{
                  method: "POST",
                  headers:{
                    "Content-Type":"applicaation/json"
                  },
                  body: JSON.stringify(payload)
                })
                let data = await result.json()
                console.log('ad', data)
                context.dispatch("fetchSalary");
              } catch (e) {
                console.log(e);
                sweet({
                  title:'Error',
                  text: 'Failed to add salary input',
                  icon: 'error',
                  timer: 2000
                })
                
              }
            },
            async updateSalary(context, payload){
    try {
      let result = await fetch(`${Urldata}/salary/update/${payload.staffNo}`,{
        method: "PATCH",
        headers:{
          "Content-Type":"application/json"
       },
       body: JSON.stringify(payload)
      })
      let data = await result.json()
      console.log(data);
      context.dispatch('fetchSalary')
      sweet({
        title:'salary was changed',
        text: 'Salary has been updated',
        icon: 'successs',
        timer: 2000
      })
    } catch (e) {
      sweet({
        title: 'Error',
        text: "Could not update salary",
        icon: 'error',
        timer:2000
      })
    }
            },
            async deletePay(context, payload){
              try {
                let result = await fetch(`${Urldata}/salary/delete/${payload}`,{
                  method: "DELETE"
                })
                let data = await result.json()
                console.log(data);
                context.dispatch('fetchSalary')
                sweet({
                  title: "Leave day was deleted",
                  text: "leave removed succesfully",
                  icon: "success",
                  timer: 2000
                })
              } catch (e) {
                sweet({
                  title: "Error",
                  text: "Error occured while trying to delete leave",
                  icon: "error",
                  timer: 2000
                })
              }
            
                context.commit('setPay', payload)
            }
        
        
        
      
    
  },
  modules: {
  }
})
