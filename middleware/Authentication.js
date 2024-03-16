import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const { sign, verify } = jwt;
function createToken(user){
    return sign({
        empEmail: user.empEmail,
        empPwd: user.empPwd
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    })
}

function verifyAToken(token){
    console.log(token)
}
function verifyToken(req,res, next) {
    // retrieve a token from the browser
   const token = req?.header['Authorization']
   if (token) {
    if (verify(token, process.env.SECRET_KEY)){
        next()

    } else{
        res?.json({
            status: res.statusCode,
            msg: 'Please provide the correct credentials'
        })
    }
        
    
   
}else{
    res?.json({
        status:  res.statusCode,
        msg: "Please login."
    })
}}

export {
    createToken,
    verifyAToken,
    verifyToken
}