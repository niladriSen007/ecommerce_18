import JWT from "jsonwebtoken";
import { UserDetails } from "../models/userDetails.js";

export const validateUserAuth = async (req, res, next) => {
  try {
    const access_token = req.headers.cookie.split("=")[1].toString();
    JWT.verify(access_token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token not valid..");
      req.user = user;
      // console.log(req.user);
      next();
    });
  } catch (e) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

export const validateIsAdmin = async (req, res, next) => {
  try {
    validateUserAuth(req, res, async () => {
      const isAdminUser = await UserDetails.findById(req.user.id);
      
      if (isAdminUser.role != 1) {
        return res.status(401).send({
          success: false,
          message: "UnAuthorized Access",
        });
      }
      else next();

    });
  } catch (e) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
