require('dotenv').config()
const express = require("express")
const app =  express();
const cors = require("cors")
const bodyparser = require("body-parser")
const adminRouter = require("./Routers/Admin.routers");
const UserRouter = require("./Routers/User.routers");

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL)

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

app.use("/dashboard",adminRouter);
app.use("/home",UserRouter)


app.listen(8000,()=>{
   console.log("app is running")
})