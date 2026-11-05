// Import required modules
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai');
const app = express();
const PORT = process.env.PORT || 5000;

// Configure middleware
app.use(cors());
app.use(express.json());

// Register the route
app.use('/api', aiRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
