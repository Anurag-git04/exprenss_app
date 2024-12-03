// import mongoose from "mongoose";

// export const connectDB = async (req, res) => {
//     const db = process.env.MONGO_URL;

//     const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

//     console.log(`MongoDB Connected to ${connection.host}`);

// }

const mongoose = require('mongoose');
require('dotenv').config(); // Make sure to load the .env file

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};