import express from "express"
const app = express()
import dotenv from "dotenv"
dotenv.config()

const PORT = process.env.PORT;
const MODE = process.env.MODE;

app.get("/",(req,res)=>{
    res.send("Hi I am Backend")
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${MODE} mode and on port ${PORT}`)
})