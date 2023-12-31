import express from 'express'
import formidable from "express-formidable"
import { BrainTreePaymentController, BrainTreeTokenController, CreateProduct, DeleteProduct, GetAllProducts, GetProductByCategory, GetProductPhoto, GetSingleProduct, UpdateProduct } from '../controllers/product.js'
const router = express.Router()

router.post("/createProduct",formidable(),CreateProduct)
router.get("/getAllProducts",GetAllProducts)
router.get("/getAllProducts/:id",GetProductByCategory)
router.get("/getSingleProduct/:id",GetSingleProduct)
router.get("/getProductPhoto/:id",GetProductPhoto)
router.delete("/deleteProduct/:id",DeleteProduct)
router.put("/updateProduct/:id",formidable(),UpdateProduct)
router.get("/braintree/token",BrainTreeTokenController)
router.post("/braintree/payment",BrainTreePaymentController)
export default router