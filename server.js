import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import { client, connectToMongoDB} from "./src/db/connect.js";
import { router as dishesRouter } from './src/routes/dishesRoute.js';
import { globalErrorHandler, notFoundErrorHandler } from './src/middleware/errorHandler.js';

const PORT = process.env.PORT || 3001;

const app = express()

app.use(express.json());

app.use('/', dishesRouter)

app.use(notFoundErrorHandler)

app.use(globalErrorHandler)

connectToMongoDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

