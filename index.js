import express  from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express();
const port = +process.env.PORT || 4000

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
app.listen(port,()=>{
    console.log(`Server is running on port: http://localhost:${port}`)
})