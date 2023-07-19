import express from 'express'
import formidable from "express-formidable"
import { CreateProduct } from '../controllers/product.js'
const router = express.Router()

router.post("/createProduct",formidable(),CreateProduct)

export default router