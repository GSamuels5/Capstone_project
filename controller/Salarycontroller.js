import express from "express";
import bodyParser from "body-parser";
import { days } from "../model/model.js";
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
leaveRouter.post('/addLeave', bodyParser.json(), (req,res)=>{
    try {
        days.addleave(req, res)
    } catch (error) {
        res.json({


            status: res.statusCode,
            msg: 'Failed to add a leave day'
        })
    }
})
leaveRouter.patch('/update',bodyParser.json(),
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
productRouter.delete('/delete/:id', (req, res)=>{
    try{
        products.deleteProduct(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete a product."
        })
    }
})
export{
    leaveRouter
}