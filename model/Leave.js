import { connection as db } from "../config/database.js";

class Employees{
    // fetch employee by id
    fetchEmployee(req,res){
        let id = req.params.id;
        const qry = `select * from Employees where staffNo= ${id}`
        db.query(qry, (err, result)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
}
}
fetchProducts(req, res){
const qry = `SELECT * FROM Products;`;

db.query(qry, (err, result)=>{
    if(err) throw err;
    res.json({
        status: res.statusCode,
        result
    })
})
}
newProduct(req, res){
let data = req.body;

const qry = `INSERT INTO Products SET ?`

db.query(qry, [data], (err)=>{
    if(err) throw err;
    res.json({
        status: res.statusCode,
        msg: "Added new product"
    })
})
}
deleteProduct(req, res){
let id = req.params.id;

const qry = `DELETE FROM Products WHERE prodID = ${id};`;

db.query(qry, (err)=>{
    if(err) throw err
    res.json({
        status: res.statusCode,
        msg: "Product removed"
    })
})
}
updateProduct(req, res){
let data = req.body;

const qry = `UPDATE Products SET ?;`;

db.query(qry, [data], (err)=>{
    if(err) throw err;
    res.json({
        status: res.statusCode,
        msg: "Product updated"
    })
})
}
}

export {
Product
}