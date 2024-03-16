import express from "express";
import { pay } from "../model/model.js";
import bodyParser from "body-parser";

const payRouter = express.Router()
// fetch salary table
payRouter.get('/', (req, res)=>{
    try {
        pay.fetchSalary(req,res)
        
    } catch(e) {
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
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to retrieve a salary information.'

        })
    }
})
// add salary
payRouter.post('/addpay', bodyParser.json(),(req,res)=>{
    try {
        pay.newSalary(req, res)
    } catch(e) {
        res.json({
            status: res.statusCode,
            msg: 'Failed to add an amount'
        })
    }
})
payRouter.patch('/update/:id', bodyParser.json(),
(req,res)=>{
    try {
        pay.updateSalary(req, res)
    } catch(e) {
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
            msg: "Failed to delete an amount"
        })
    }
})
export{
    payRouter
}