import express from "express";
import {
    createUser,
    verifyEmail,
    loginUser
} from "../controllers/userController.js"

const router = new express.Router()

router.post("/signup", createUser)
router.post("/signin", loginUser)
router.post("/verify", verifyEmail)


export default router






