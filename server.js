import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectToMongoDB from "./src/db/connect.js";

const PORT = 3001 || process.env.PORT

const app = express()

app.use(express.json());



app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`Server is running on port ${PORT}`)
})