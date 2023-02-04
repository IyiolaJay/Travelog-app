import jwt from "jsonwebtoken"
import Usermodal from "../models/user.js"
import {
    generatePayloadFromToken,
} from "../helper"

import dotenv from "dotenv"
dotenv.config()

const auth = async (req, res, next) => {
    let token
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            //get token from header
            token = req.headers.authorization.split(" ")[1]
            //verify token
            const decoded = generatePayloadFromToken(token)
            // get user from token 
            req.user = await Usermodal.findById(decoded._id).select("-password")
            next()

        } catch (error) {
            return res.status(401).json({ message: "Not Authorized" })
        }
    }

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" })
    }
}

export default auth