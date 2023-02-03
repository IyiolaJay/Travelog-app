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
            subject: params.subject,
            html: `<p>Please enter the code or link <b>${params.code || ""}</b> to complete your ${params.message}</p>`
        })

        return info
    } catch (error) {
        return false
    }
}

export default sendMail