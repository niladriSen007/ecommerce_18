import { UserDetails } from "../models/userDetails.js"

export const getAllUsers = async(req,res) =>{
    try{
        const users = await UserDetails.find()
    console.log(users)
    res.status(200).send({
        success:true,
        message:"All users fetched",
        users:users
    })
    }
    catch(e)
    {
        res.status(401).send({
            success:false,
            message:"Something went wrongd",
            error:e
        })
    }
}