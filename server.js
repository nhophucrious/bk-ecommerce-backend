const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/database');

// Load environment variables from .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property
app.use(express.json());

// Routes: example routes used, not official
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/users', require('./routes/users'));

// Handle not found route
app.use((req, res, next) => {
    res.status(404).send({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
