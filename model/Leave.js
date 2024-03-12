import { connection as db } from "../config/database.js";


class Leave{
    fetchDays(req, res){
        const qry = `Select LeaveID,
        staffNo,
        leaveDays,
        leaveReason
        from Leavedays;`
        db.query(qry, (err, results)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
    // leave days by PK
    fetchDay(req,res){
        const qry = `
        Select LeaveID,
        staffNo,
        leaveDays,
        leaveReason
        from Leavedays
        where staffNo = "${req.params.id}";`
        db.query(qry,(err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results: results[0]
            })
        })
        console.log(req.body);
    }
 addleave(req,res){
        const qry = `
        insert into Leavedays set ?;`
        db.query(qry,[req.body] ,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'leave day added'
            })
        })
    }
    updateLeave(req,res){
        let data = req.body;
        const qry = `
        update Leavedays set ? where staffNo = "${req.params.id}"; `
        db.query(qry,[req.body] ,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: 'leave was updated'
            })
        })
        console.log(data);
    }
    deleteLeave(req,res){
        const qry = `
        DELETE FROM Leavedays
        WHERE staffNo = ${req.params.id};
        `
        db.query(qry, (err)=>{
            if(err) throw err 
            res.json({
                status: res.statusCode, 
                msg: "The leave information has been deleted." 
    })
})
    }
}


export {
Leave
}