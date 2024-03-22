import express from "express";
import bodyParser from "body-parser";
import {workers} from '../model/model.js'
import { verifyToken } from "../middleware/Authentication.js";

const workRouter = express.Router()
// fetch users
workRouter.get('/',verifyToken ,(req,res )=> {
    try {
        workers.fetchEmployees(req,res)
    } catch (e) {
        res.json({

            status: res.statusCode,
            msg: 'Failed to retrieve users'
        })
        
    }
})
// fetch user by ID
workRouter.get('/:id',(req, res)=> {
    try {
        workers.fetchEmployee(req,res)
    } catch (e) {
        res.json({

            status: res.statusCode,
            msg: 'Failed to retrieve user'
        })
        
    }
})
// add a new user
workRouter.post('/register',bodyParser.json(), (req, res)=>{
    try{
        workers.hireEmployee(req, res)

    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Could not add a new user"
        })
        
    }
})
// update user
workRouter.patch('/update/:id',bodyParser.json(), (req,res)=>{
    try {
        workers.updateEmployee(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Could not update user"
        })
    }
})
// delete user 
workRouter.delete('/delete/:id',  (req,res)=>{
    try {
        workers.deleteEmployee(req,res)
        
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Could not delete user"
        })
        
    }
})
workRouter.post('/login', bodyParser.json(), (req,res)=>
{
    try {
        workers.login(req,res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to log in"
        })
    }
})

export{
    workRouter,
    express
}
