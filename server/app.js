import express from "express"
const app = express()
import dotenv from "dotenv"
import morgan from "morgan"
import { connectDB } from "./database/connection.js";
import  authRouter  from "./routers/authRoutes.js";



const PORT = process.env.PORT;
const MODE = process.env.MODE;

//database connection
connectDB()

//middlewares
app.use(express.json())
app.use(morgan("dev"))

//defning routes
app.use("/auth",authRouter)


//listening to port
app.listen(PORT,()=>{
    console.log(`Server is running on ${MODE} mode and on port ${PORT}`)
})