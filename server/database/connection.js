import mongoose from "mongoose"
import dotenv from "dotenv" 
dotenv.config()
const DB = process.env.DATABASE;
// mongoose.connect(DB).then(()=>console.log("Connection Successful")).catch((e)=>console.log(e));

export const connectDB = async()=>{
    try{
        const connection = await mongoose.connect("mongodb+srv://nil:nil@cluster0.he3ht7l.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connection Successful")
    }
    catch(error){
        console.log(`Server error occured - ${error}`)
    }
}   