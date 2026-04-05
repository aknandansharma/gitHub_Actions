import express from 'express';
import AllRoutes from './routes/route.js';
import mongoose from 'mongoose';
import connect_DB from './config/database.js';
import dotenv from 'dotenv';

dotenv.config();
connect_DB();

const app = express();
const PORT = process.env.PORT ?? 8000;

AllRoutes(app);




app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

