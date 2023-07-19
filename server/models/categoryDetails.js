import mongoose from "mongoose"
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    slug:{
        type:String,
        lowercase:true
    }
})

export const CategoryDetails = mongoose.model("CategoryDetail",categorySchema)