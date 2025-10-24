const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');
require('dotenv').config(); // ✅ Load environment variables

// MongoDB Connection
connectToMongo();

// Express App Initialization
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/quotes', require('./routes/quotes'));

// Default route (for testing)
app.get('/', (req, res) => {
  res.send('🚀 Quote API is running successfully!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
