import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

import { connectToMongoDB} from "./src/db/connect.js";
import { router as dishesRouter } from './src/routes/dishesRoute.js';
import { globalErrorHandler, notFoundErrorHandler } from './src/middleware/errorHandler.js';


const PORT = process.env.PORT || 3001;

const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json());

app.use('/', dishesRouter)

app.use(notFoundErrorHandler)

app.use(globalErrorHandler)

connectToMongoDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

