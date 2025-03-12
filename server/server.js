const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error('MongoDB URI is not defined. Check your .env file.');
    process.exit(1); // Exit the application if URI is not defined
}

mongoose
    .connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
    res.send('Server is running');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
