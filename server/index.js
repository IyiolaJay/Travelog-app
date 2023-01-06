import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import morgan from "morgan"

dotenv.config()

const app = express()

const port = process.env.PORT

app.use(morgan("dev"))
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())



app.listen(port, () => {
    console.log(`app running  live on ${port}`)
})