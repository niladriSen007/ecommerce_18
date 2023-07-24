import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    products:[
        {
            type:mongoose.ObjectId,
            ref:"ProductDetail"
        }
    ],
    payment:{},
    buyer:{
        type:mongoose.ObjectId,
        ref:"UserDetail"
    },
    status: {
        type: String,
        default: "Not Process",
        enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
      },
},{timestamps:true})

export const OrderDetails = mongoose.model("OrderDetail",orderSchema)