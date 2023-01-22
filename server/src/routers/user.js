import express from "express";

const router = new express.Router()

router.get("/", (req, res) => {
    res.send('hello world')
    console.log(req.query)
})

export default router






