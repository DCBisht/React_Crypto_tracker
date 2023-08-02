import express   from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter  from "./routes/user-routes";
import adminRouter  from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingsRouter from "./routes/booking-routes";
import cors from "cors";
dotenv.config();


// Use this after the variable declaration
// console.log("Hello");
// const express = require('express');
 

//middlewares

const app= express();
app.use(cors()); 
app.use(express.json());
// userRoutes(app);
app.use('/user',userRouter);
// adminRoutes(app);
app.use('/admin',adminRouter);
app.use('/movie',movieRouter);
app.use('/booking',bookingsRouter);
mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.ja3nrld.mongodb.net/?retryWrites=true&w=majority`).then(()=>app.listen(5000, ()=>{
    console.log(`Connected to database and server is running at ${5000}`);
})).catch(e=> console.log("Error"+e));

// app.use("/",(req,res,next)=>{
//     res.send("Hii");
// })
// module.exports = app;

//5bXxZbGn0DMQSgvB