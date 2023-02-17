import crypto from "crypto"
import sendMail from "./emailService.js"
import userModal from "../models/userModel.js"
import TokenModal from "../models/tokenModel.js"
import {
    passwordToHash,
    compareBcryptPassword
} from "../utils/helper.utils.js"

import dotevn from "dotenv";
dotevn.config()

//request password reset
export const requestPasswordReset = async (email) => {
    //check for user
    const user = await userModal.findOne({ email })
    //check if user exist
    if (!user) throw new Error("Email does not exist")
    //check for token
    const token = await TokenModal.findOne({ userId: user._id })
    //if token delete it
    if (token) await token.deleteOne()
    //create new token
    const resetToken = crypto.randomBytes(32).toString("hex")
    //hash this token
    const hashedToken = passwordToHash(resetToken)
    //create new token
    await new TokenModal({
        userId: user._id,
        token: hashedToken,
        createdAt: Date.now()

    }).save()

    //create link
    const link = `${process.env.BASE_URL}/password-reset?token=${resetToken}&id=${user._id}`;
    // send the mail
    sendMail({
        to: user.email,
        subject: "Password Reset",
        code: link,
        message: "Password Reset"

    })

    return link
};

//now reset the password
export const resetPassword = async (userId, token, password) => {
    //get user from token
    const passwordResetToken = await TokenModal.findOne({ userId })
    if (!passwordResetToken) {
        throw new Error("Invalid or expired password reset token")
    }

    const isValid = compareBcryptPassword(token, passwordResetToken.token)

    if (!isValid) {
        throw new Error("Invalid or expired password reset token")
    }
    // hash new password 
    const hashedPassword = passwordToHash(password)
    //save user to database

    await userModal.updateOne(
        { _id: userId },
        { $set: { password: hashedPassword } },
        { new: true }
    )

    //get user and send them password update is successful
    const user = await userModal.findById({ _id: userId })

    sendMail({
        to: user.email,
        subject: "Password Reset Successful",
        message: "Password Reset"
    })

    await passwordResetToken.deleteOne()

    return { message: "password reset was successful" }

}

