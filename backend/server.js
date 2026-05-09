import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { protect } from './middleware/authMiddleware.js';

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Fallback to port 5000 if the .env file is missing it
const port = process.env.PORT || 5000;

// Apply the routes to the Express app
app.use('/api/products', productRoutes);

app.get('/api/test', (req, res) => {
    res.json({ message: "The Shopping Cart API is running!" });
});

app.get('/api/secure-profile', protect, (req, res) => {
    // If they make it here, the bouncer let them through!
    res.json({
        message: "You bypassed the bouncer!",
        user: req.user
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;
