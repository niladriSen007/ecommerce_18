import { comparePassword, hashedPassword } from "../helpers/authHelper.js";
import { UserDetails } from "../models/userDetails.js";
import JWT from "jsonwebtoken";
const JWT_SECRET_KEY = "niladriwillbeagooddeveloperatanyhow"

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

    const hashPassword = await hashedPassword(password);

    const newUser = new UserDetails({
      name,
      email,
      password: hashPassword,
      address,
      phone,
    });

    await newUser.save();


    //JWT
    const token = JWT.sign({ id: newUser._id }, JWT_SECRET_KEY, {
      expiresIn: "14d",
    });



    res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send({
        success: true,
        message: "New User has been Added",
      });

    

    // res.status(200).send({
    //   success: true,
    //   message: "New User has been Added",
    // });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while registering the user",
      error,
    });
  }
};

export const LoginUser = async (req, res) => {
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

  try {
    const user = await UserDetails.findOne({ email });
    // console.log(user)

    if (!user)
      return res.status(500).send({
        success: false,
        message: "No User Exist",
      });

    const passwordMatch = await comparePassword(password, user.password);

    if (!passwordMatch)
      return res.status(500).send({
        success: false,
        message: "Wrong Credentials",
      });

    //JWT
    const token = JWT.sign({ id: user._id }, JWT_SECRET_KEY, {
      expiresIn: "14d",
    });



    res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send({
        success: true,
        message: "Login Sussessful",
        user:user
      });



  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error while Login",
      error: error,
    });
  }
};



export const googleAuthentication = async (req, res, next) => {
  try {
    const user = await UserDetails.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET_KEY
      );

      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
        const newUser = new UserDetails({
            ...req.body,
            fromGoogle:true,
        })
        const savedUser = await newUser.save();
        const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_KEY);
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (e) {
    next(e);
  }
};
