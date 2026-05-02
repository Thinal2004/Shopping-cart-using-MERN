const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a new product
router.post('/', async (req, res) => {
    try {

        const newProduct = new Product(req.body);

        // Save it to MongoDB
        const savedProduct = await newProduct.save();

        // Send back the saved product with a 201 success status
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        // Return everything in the collection
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
});

module.exports = router;