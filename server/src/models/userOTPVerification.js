import mongoose from "mongoose";

const userOTPschema = mongoose.Schema(
    {
        userId: String,
        otp: String,
        createdAt: Date,
        expireAt: Date
    }
)

export default mongoose.model('UserOTPVerification', userOTPschema)