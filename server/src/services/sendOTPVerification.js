import otp from "otp-generator"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()
import {
    passwordToHash,
} from "../helper.js";
import userOTPVerification from "../models/userOTPVerification.js";


//nodemailer transport
const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_USERNAM
    }
})

//nodemailer success
transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log("ready for message")
        console.log(success)
    }
})

// send OTP verification email
export const sendOTPVerificationCode = async ({ _id, email }, res) => {
    try {
        const OTP = otp.generate(6, { digits: true, upperCaseAlphabets: false, specialChars: false })
        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: "Email Verification",
            html: `<p>Please Enter code <b>${OTP}</b> in the App to verify your email address to complete your signup.</p>
                    <p>This code <b>Expires in 1 hour.</b> </p>
            `
        };

        //hash otp
        const hashedOTP = passwordToHash(OTP)
        // new user Otp verification
        const newOtpVerification = await new userOTPVerification({
            userId: _id,
            otp: hashedOTP,
            createdAt: Date.now(),
            expiresAt: Date.now() + 36000000

        })

        // save otp record
        await newOtpVerification.save()
        // send mail
        await transporter.sendMail(mailOptions)
        return res.json({
            status: "PENDING",
            message: "verification OTP sent",
            data: {
                userId: _id,
                email,

            }


        })
    } catch (error) {
        return res.json({
            status: "FAILED",
            message: error.message,
        })
    }
}
