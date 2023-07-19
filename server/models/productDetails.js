import mongoose from "mongoose"
const productSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
        },
        slug: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        category: {
          type: mongoose.ObjectId,
          ref: "CategoryDetail",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        photo: {
          data: Buffer,
          contentType: String,
        },
        shipping: {
          type: Boolean,
        },
      },
      { timestamps: true }
)

export const ProductDetails = mongoose.model("ProductDetail",productSchema)