import { connection as db } from "../config/database.js";
import{hash, hashSync, compare} from "bcrypt"
import{ createToken, verifyAToken} from '../middleware/Authentication.js'
class Employees{
// fetch all employees
fetchEmployees(req, res){
    const qry = `SELECT staffNo, firstName,
     surname, empEmail,
     empPwd,empAge , 
     department FROM Employees;`
    
    db.query(qry, (err, result)=>{
        if(err) throw err;
        res.json({
            status: res.statusCode,
            result
        })
    })
    }

    // fetch employee by id
    fetchEmployee(req,res){
        let id = req.params.id;
        const qry = `select * from Employees where staffNo= ${id};`
        db.query(qry, (err, result)=>{
            if(err) throw err;
            res.json({
                status: res.statusCode,
                result
            })
        })
    }
// add new employee
async hireEmployee(req, res){
    // Payload
let data = req.body;
data.userPwd = await hash(data?.userPwd, 8)
let user = {
    empEmail: data.empEmail,
    empPwd: data.empPwd
}

const qry = `INSERT INTO Employees SET ?`

db.query(qry, [data], (err)=>{
    if(err){
        res.json({
            status: res.statusCode,
    
            msg: "This email already exist"
        })
    } else {
        let token = createToken(user)
        res.json({
    
            status: res.statusCode,
            token,
            msg: "Account Created"
        })
    }

    }
)
}
async updateEmployee(req, res){
    let data = req.body;
    data.userPwd = await hash(data?.userPwd, 8)
    
    const qry = `UPDATE Employees SET ? Where staffNo =${req.params.id};`;
    let user = {
        empEmail: data.empEmail,
        empPwd: data.empPwd
    }

    console.log(req.body.id)
    
    db.query(qry, [data], (err)=>{
        if (err) {
            res.json({
               status: res.statusCode,
               msg : "Cannot update employee" 
            })
            
        }else{
            let token = createToken(user)
            res.json({
                status: res.statusCode,
                token,
                msg: "user updated"
            })
        }
    })}
deleteEmployee(req, res){
let data = req.body;

const qry = `DELETE FROM Employess WHERE staffNo = ${req.params.id};`;

db.query(qry,[data], (err)=>{
    if(err) throw err
    res.json({
        status: res.statusCode,
        msg: "Employee removed"
    })
})
}
login(req,res){
    const {empEmail, empPwd} = req.body
    const qry = `
    select staffNo, firstName, surname,
    empEmail,  empPwd, empAge, department
    from Employees
    where empEmail = "${empEmail}";`
    db.query(qry, async(err, result)=>{
        if (err) throw err
        if(!result?.length){
res.json({
status: res.statusCode,
msg: 'You provided a wrong email address.'
})
        }else{
            // validate password
            const validPass = await compare
            (empPwd, result[0].empPwd)
            if (validPass) {
                const token = createToken({
                    empEmail,
                    empPwd
                })
                res.json({
                    status: res.statusCode,
                    msg: "You're logged in",
                    token,
                    result: result[0]
                })
            }else{
                res.json({
                    status: statusCode,
                    msg: "Please provide the correct password."
                })
            }
        }
    })
}
async signUp(req, res){
    try {
        const {empEmail,empPwd}= req.body
        // check if user exist in database
        const existing =`select from Employees where empEmai=?;`;
        db.query(existing, [empEmail], async (err,existingUser)=>{
            if(err){
                throw err;
            }
            if(existingUser.length > 0){
                return res.status(400).json({msg: "Email already exist"})
            }
            // hash the password
            const hashPWd = await hash(empPwd, 8);
            // insert new user into database
            const newUser = `into into Employees(empEmail, empPwd) values (?,?);`;
            db.query(newUser, [empEmail, hashPWd], (err, result)=>{
                if(err){
                    throw err
                }
                const user = {empEmail, empPwd: hashPWd}
                const token = createToken(user)

                res.json({
                    status: res.statusCode,
                    token,
                    msg: "Account created succesfully"
                })
            })
        })

    } catch (err) {
        res.status(500).json({msg:"Internal server error"})
    }
}
}


export {
Employees
}