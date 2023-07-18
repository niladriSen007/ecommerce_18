import express from "express"
import { ForgotPassword, LoginUser, RegisterUser } from "../controllers/auth.js"
import { validateIsAdmin, validateUserAuth } from "../middlewares/authMiddleware.js"


const router = express.Router()

router.post("/register",RegisterUser)
router.post("/login",LoginUser)
router.post("/forgotpassword",ForgotPassword)
router.post("/dashboard",validateIsAdmin,(req,res)=>res.status(200).send({success:true,message:"Admin",admin:true,user:true}))


export default router