require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

// Import the product routes
const productRoutes = require('./routes/productRoutes');

// Apply the routes to the Express app
app.use('/api/products', productRoutes);

app.get('/api/test', (req, res) => {
    res.json({ message: "The Shopping Cart API is running!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});