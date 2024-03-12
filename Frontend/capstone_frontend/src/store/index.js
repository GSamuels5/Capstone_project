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
        console.log(data);
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
        if (data) {context.commit('setWorker', result)
          
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
          timer: 2000
        })
      }
    }
  },
  modules: {
  }
})
