import express from 'express'
import { CreateCategory, DeleteCategory, GetAllCategory, GetsingleCategory, UpdateCategory } from '../controllers/category.js'
import { validateIsAdmin } from '../middlewares/authMiddleware.js'
const router = express.Router()

router.post("/createCategory",CreateCategory)
router.delete("/deleteCategory/:id",DeleteCategory)
router.put("/updateCategory/:id",UpdateCategory)
router.get("/getAllCategory",GetAllCategory)
router.get("/getSingleCategory/:slug",GetsingleCategory)


export default router