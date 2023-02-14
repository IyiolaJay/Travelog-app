import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./src/config/db.js"
import userRoutes from "./src/routes/userRoute.js"

const app = express()
dotenv.config()

connectDB()


const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//routes
app.use("/travelog/users", userRoutes)

app.listen(port, () => {
    console.log(`app running  live on ${port}`)
})

