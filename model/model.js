import { Leave } from "./Leave.js";
import { Employees } from "./Employees.js";
import { Salary } from "./Salary.js";
// create objects
let workers = new Employees()
let pay = new Salary()
let days = new Leave()

export{
    days,
    workers,
    pay
}