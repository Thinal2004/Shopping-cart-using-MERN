require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get('/api/test', (req, res) => {
    res.json({ message: "The Shopping Cart API is running!" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});