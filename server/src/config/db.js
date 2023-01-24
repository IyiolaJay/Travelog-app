import dotenv from "dotenv"
dotenv.config()

import mongoose from "mongoose";
const URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDB

