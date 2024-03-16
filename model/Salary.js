import { connection as db } from "../config/database.js";


class Salary{
    fetchSalary(req, res){
        const qry = `select *
        from Salary;`
        
        db.query(qry, (err, results)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                results
            })
            
        })
    }
    // Salary by FK
    fetchpay(req,res){
        const qry = `
        Select salaryID,
        amount,
        staffNo
        from Salary
        where staffNo = "${req.params.id}";`
        console.log(req.params.id);
        db.query(qry,(err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results: results[0]
            })
        })
    }
 newSalary(req,res){
        const qry = `
        insert into Salary set ?;`
        
        db.query(qry,[req.body] ,(err)=>{
            console.log(req.body);
            if(err) throw err
           return res.json({
                status: res.statusCode,
                msg: 'new salary added'
              
            })
        })
    }
    updateSalary(req,res){
        let data = req.body;
        console.log(data);
        const qry = `
        update Salary set ? where staffNo = "${req.params.id}"; `
        console.log(req.params.id);
        db.query(qry,[req.body] ,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'salary was updated'
            })
        })
    }
    deletePay(req,res){
        const qry = `
        DELETE FROM Salary
        WHERE staffNo = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: "The salary information has been deleted." 
    })
})
    }
}


export {
Salary
}