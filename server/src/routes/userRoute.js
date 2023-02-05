import express from "express";
import {
    createUser,
    verifyEmail,
    loginUser,
    resetpasswordRequest,
    resetPasswordController,

} from "../controllers/userController.js"

const router = new express.Router()

router.post("/signup", createUser)
router.post("/signin", loginUser)
router.post("/verify", verifyEmail)
router.post("/password-reset-request", resetpasswordRequest)
router.post("/password-reset", resetPasswordController)


export default router






