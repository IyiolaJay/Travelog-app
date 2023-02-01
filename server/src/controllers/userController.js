import Joi from "joi";
import UserModal from "../models/userModel.js";
import {
  generateTokenFromPayload,
  passwordToHash,
  compareBcryptPassword,
} from "../utils/helper.utils.js";
import generateOTP from "../services/OTPService.js";
import sendMail from "../services/emailService.js";


// @signUp route   
// @public route
export const createUser = async (req, res) => {
  // user input
  const { username, email, password } = req.body;
  //parameter validation
  const schema = Joi.object().keys({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  // validate user input
  const { error } = schema.validate({ username, email, password });
  if (error) {
    return res
      .status(400)
      .json({ message: error.message });
  }

  try {
    //check if user exist
    const oldUser = await UserModal.findOne({ email });
    if (oldUser) {
      return res.status(400).json({ message: "user already exist" });
    }

    //hashed password
    const hashedPassword = passwordToHash(password);
    const otpGenerated = generateOTP()
    const hashedOTP = passwordToHash(otpGenerated)
    //create user
    const user = await UserModal.create({
      username,
      email,
      password: hashedPassword,
      otp: hashedOTP,
      verified: false
    });

    //send OTP to user
    await sendMail({
      to: email,
      OTP: otpGenerated
    })

    return res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateTokenFromPayload(user._id),
    });
  } catch (error) {
    return res.status(501).json({ message: "Something went wrong" });
  }
};

// @verify email router
// @public route
export const verifyEmail = async (req, res) => {
  const { email, otp } = req.body
  const user = await validateUserSignUp(email, otp)
  console.log(user)
  return res.status(200).json({
    _id: user[1]._id,
    username: user[1].username,
    email: user[1].email,
    verified: user[1].verified,
  })

}

//validateuser input
const validateUserSignUp = async (email, otp) => {
  const user = await UserModal.findOne({ email })
  if (!user) {
    return [false, "User not found"]
  }
  const check = compareBcryptPassword(otp, user.otp)
  if (user && !check) {
    return [false, 'Invalid OTP']
  }
  //update the user
  const updatedUser = await UserModal.findByIdAndUpdate(user._id, {
    verified: true
  })

  return [true, updatedUser]
};


// @login route 
// @public route
export const loginUser = async (req, res) => {
  //get user input
  const { email, password } = req.body;
  //parameter validation
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  //validate user input
  const { error } = schema.validate({ email, password });
  if (error) {
    return res.status(400).json({ message: `${error.message}` });
  }

  try {
    const user = await UserModal.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    //validate password
    const ispasswordCorrect = compareBcryptPassword(password, user.password);
    if (!ispasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    res.status(200).json({
      _id: user.id,
      username: user.username,
      email,
      token: generateTokenFromPayload(user._id),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
