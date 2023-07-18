import express from "express"
import { getAllUsers } from "../controllers/user.js"
const router = express.Router()

router.get("/admin/allUsers",getAllUsers)

export default router