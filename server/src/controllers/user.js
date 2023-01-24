import Joi from "joi"
import bcrypt from "bcryptjs"
import UserModal from "../models/user.js"
import {
    generateTokenFromPayload,
    passwordToHash,
    compareBcryptPassword
} from "../helper.js"
import user from "../models/user.js"

// signup route -  public route
export const createUser = async (req, res) => {
    // user input
    const { username, email, password } = req.body
    //parameter validation
    const schema = Joi.object().keys({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
    // validate user input
    const isValidResult = schema.validate({ username, email, password })
    if (isValidResult?.error) {
        return res.status(400).json({ message: `${isValidResult?.error?.message}` })
    }

    try {
        //check if user exist
        const oldUser = await UserModal.findOne({ email })
        if (oldUser) {
            return res.status(400).json({ message: "user already exist" })
        }

        //hashed password
        const hashedPassword = passwordToHash(password)
        //create user
        const user = await UserModal.create({
            username,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateTokenFromPayload(user._id)
        })

    } catch (error) {
        console.log(error)
        return res.status(501).json({ message: "Something went wrong" })
    }
}

//login route - public route
export const loginUser = async (req, res) => {
    //get user input
    const { email, password } = req.body
    //parameter validation
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
    //validate user input
    const isvalidate = schema.validate({ email, password })
    if (isvalidate?.error) {
        return res.status(400).json({ message: `${isvalidate?.error?.message}` })
    }

    try {
        const user = await UserModal.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User does not exist" })
        }
        //validate password
        const ispasswordCorrect = compareBcryptPassword(password, user.password)
        if (!ispasswordCorrect) {
            return res.status(400).json({ message: "Invalid Credencials" })
        }

        res.status(200).json({
            _id: user.id,
            username: user.username,
            email,
            token: generateTokenFromPayload(user._id)

        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something went wrong" })
    }


}








