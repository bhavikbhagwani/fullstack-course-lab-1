import { fileURLToPath } from 'url'
import { dirname } from 'path'

// full path of current file (...lab1/server.js)
const __filename = fileURLToPath(import.meta.url)
// directory path of current file (not file, just until the folder ...lab1/)
const __dirname = dirname(__filename)

import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

import { connectToMongoDB} from "./src/db/connect.js";
import { router as dishesRouter } from './src/routes/dishesRoute.js';
import { globalErrorHandler, notFoundErrorHandler } from './src/middleware/errorHandler.js';


const PORT = process.env.PORT || 5000;

const app = express()

// serve static files from public folder (hmtl, css files)
app.use(express.static('public'));

// send index.html as the home page when http://localhost:5000/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json());

app.use('/', dishesRouter)

app.use(notFoundErrorHandler)
app.use(globalErrorHandler)

// connects to database and start server
connectToMongoDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

