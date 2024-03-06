import express from "express";
import { days } from "../model/model.js";
import { workRouter } from "./Employeecontroller.js";
const leaveRouter = express.Router()
// fetch leave days
leaveRouter.get('/', (req, res)=>{
    try {
        days.fetchDays(req,res)
    } catch (e) {
        res.json({
            status: statusCode,
            msg: 'Failed to retrieve leave day'

        })
    }
})
// add a leave day
leaveRouter.get('/:id', (req, res)=>{
    try {
        days.fetchDay(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a leave day.'

        })
    }
})
leaveRouter.post('/addLeave',  (req,res)=>{
    try {
        days.addleave(req, res)
    } catch (error) {
        res.json({


            status: res.statusCode,
            msg: 'Failed to add a leave day'
        })
    }
})
leaveRouter.patch('/update',
(req,res)=>{
    try {
        days.updateLeave(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg: "Could not update leave days"
        })
    }
})
workRouter.delete('/delProduct', (req, res)=>{
    try {
        product.delProduct(req, res);
    } catch(e) {
        console.log(e);
        res.json({
            status: res.statusCode,
            msg: "Could not remove leave day"
        })
    }
})
export{
    leaveRouter
}