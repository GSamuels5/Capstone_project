import express  from "express";
import cookieParser from "cookie-parser";
import { workRouter } from "./controller/Employeecontroller.js";
import { leaveRouter } from "./controller/Leavecontroller.js";
import { payRouter } from "./controller/Salarycontroller.js";
import {errorHandling} from "./middleware/Errorhandling.js"
import path from "path"
import cors from 'cors'

const app = express();
const port = +process.env.PORT || 3500

app.use((req,res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true
    }),
    cookieParser(),
    cors()
);
app.get('/', (req, res)=>{
    res.status(200).sendFile('/static/index.html');
})
app.use('/workers', workRouter)
app.use('/leave', leaveRouter)
app.use('/salary', payRouter)
app.use(errorHandling)
app.listen(port,()=>{
    console.log(`Server is running on port: http://localhost:${port}`)
})