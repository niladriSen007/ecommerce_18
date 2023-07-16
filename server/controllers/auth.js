import { comparePassword, hashedPassword } from "../helpers/authHelper.js";
import { UserDetails } from "../models/userDetails.js";
import JWT from "jsonwebtoken";


export const RegisterUser = async (req, res, next) => {
  const { name, email, password, phone, address } = req.body;


  if (!name || !email || !password || !phone || !address) {
    return res.send({
      error: "Please provide all required fields.",
      missingFields: {
        name: !name,
        email: !email,
        password: !password,
        phone: !phone,
        address: !address,
      },
    });
  }

  try {
    const existingUser = await UserDetails.findOne({ email });

    if (existingUser)
      return res.status(200).send({
        success: false,
        message: "User already exists",
      });

    const hashPassword =await hashedPassword(password);

    const newUser = new UserDetails({
      name,
      email,
      password: hashPassword,
      address,
      phone,
    });

    await newUser.save();

    res.status(200).send({
      success: true,
      message: "New User has been Added",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while registering the user",
      error,
    });
  }
};


export const LoginUser = async(req,res)=>{
    const { email, password } = req.body;

    if (!email || !password) {
        return res.send({
          error: "Please provide all required fields.",
          missingFields: {
            email: !email,
            password: !password,
          },
        });
      }
    

    try{
        

        
        
        const user = await UserDetails.findOne({email})
        // console.log(user)

        if(!user)
            return res.status(500).send({
            success: false,
            message: "No User Exist",
          });
        
        const passwordMatch = await comparePassword(password,user.password);

        if(!passwordMatch)
            return res.status(500).send({
            success: false,
            message: "Wrong Credentials",
          });


          //JWT
          const token = JWT.sign({_id:user._id},process.env.JWT_SECRET_KEY,{
            expiresIn:"14d"
          })


    res.status(200).send({
        success: true,
        message: "Login Sussessful",
        
    })
    }
    catch (error) {
        return res.status(500).send({
          success: false,
          message: "Error while Login",
          error:error,
        })

    }
}

