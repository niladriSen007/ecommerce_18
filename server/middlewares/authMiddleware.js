import JWT from "jsonwebtoken";
import { UserDetails } from "../models/userDetails.js";
const JWT_SECRET_KEY = "niladriwillbeagooddeveloperatanyhow"


export const validateUserAuth = async (req, res, next) => {
  try {
    console.log(req.headers.cookie)
    const access_token = req.headers.cookie.split("=")[1].toString();
    JWT.verify(access_token,JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token not valid..");
      req.user = user;
      // console.log(req.user);
      next();
    });
  } catch (e) {
    res.status(401).json({ message: "Invalid Token catch" });
  }
};

export const validateIsAdmin = async (req, res, next) => {
  try {
       
      // console.log("This       "+req.body.parseData._id)
      const isAdminUser = await UserDetails.findById(req.body.parseData._id);
      
      if (isAdminUser.role !== 1) {
        return res.status(200).send({
          success: false,
          user:true,
          admin:false,
          message: "UnAuthorized Access",
        });
      }
      else next();
  } catch (e) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
