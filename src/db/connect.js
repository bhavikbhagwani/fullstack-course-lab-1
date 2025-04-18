import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


// function to connect to MongoDB using Mongoose and handle connection errors

export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};