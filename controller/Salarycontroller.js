import express from "express";
import { pay } from "../model/model.js";
import { verifyToken } from "../middleware/Authentication.js";
const payRouter = express.Router()
// fetch salary table
payRouter.get('/',verifyToken, (req, res)=>{
    try {
        pay.fetchSalary(req,res)
    } catch (e) {
        res.json({
            status: statusCode,
            msg: 'Failed to retrieve salary'

        })
    }
})
// add a leave day
payRouter.get('/:id', (req, res)=>{
    try {
        pay.fetchpay(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a salary information.'

        })
    }
})
// add salary
payRouter.post('/addpay/:id', (req,res)=>{
    try {
        pay.newSalary(req, res)
    } catch (error) {
        res.json({


            status: res.statusCode,
            msg: 'Failed to add a amount'
        })
    }
})
payRouter.patch('/update/:id',
(req,res)=>{
    try {
        pay.updateSalary(req, res)
    } catch (error) {
        res.json({
            status: res.statusCode,
            msg: "Could not update salary"
        })
    }
})
payRouter.delete('/delete/:id', (req, res)=>{
    try{
        pay.deletePay(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to delete a amount"
        })
    }
})
export{
    payRouter
}