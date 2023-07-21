import express from 'express'
import formidable from "express-formidable"
import { CreateProduct, DeleteProduct, GetAllProducts, GetProductPhoto, GetSingleProduct, UpdateProduct } from '../controllers/product.js'
const router = express.Router()

router.post("/createProduct",formidable(),CreateProduct)
router.get("/getAllProducts",GetAllProducts)
router.get("/getSingleProduct/:id",GetSingleProduct)
router.get("/getProductPhoto/:id",GetProductPhoto)
router.delete("/deleteProduct/:id",DeleteProduct)
router.put("/updateProduct/:id",formidable(),UpdateProduct)

export default router