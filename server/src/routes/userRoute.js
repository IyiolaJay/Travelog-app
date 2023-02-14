import express from "express";
import {
    createUser,
    verifyEmail,
    loginUser,
    resetpasswordRequest,
    resetPasswordController,
    getUser,
    updatedUser,
    deleteUser

} from "../controllers/userController.js"

const router = new express.Router()

router.post("/signup", createUser)
router.post("/signin", loginUser)
router.post("/verify", verifyEmail)
router.post("/password-reset-request", resetpasswordRequest)
router.post("/password-reset", resetPasswordController)
router.get("/get/me")


export default router






