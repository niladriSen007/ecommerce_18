import express from "express"
import { LoginUser, RegisterUser } from "../controllers/auth.js"
import { validateIsAdmin, validateUserAuth } from "../middlewares/authMiddleware.js"

const router = express.Router()

router.post("/register",RegisterUser)
router.post("/login",LoginUser)
router.get("/admin",validateIsAdmin,(req,res)=>res.send("Admin"))

export default router