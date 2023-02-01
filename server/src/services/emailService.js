import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

//nodemailer transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
})


const sendMail = async (params) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USERNAME,
            to: params.to,
            subject: "Email Verification",
            html: `<p>Please enter the code <b>${params.OTP}</b> to complete your Sign Up</p>`
        })

        return info
    } catch (error) {
        return false
    }
}

export default sendMail