import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import userRouter from "./src/routers/user.js"


dotenv.config()

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.use(userRouter)



app.listen(port, () => {
    console.log(`app running  live on ${port}`)
})
