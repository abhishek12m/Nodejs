const express = require('express');
const bodyParser = require('body-parser');
const basicAuth = require('./middleware/basicAuthMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Apply Basic Authentication middleware to all routes under '/resource'
app.use('/resource', basicAuth);

// Routes
const resourceRoutes = require('./routes/resourceRoutes');
app.use('/resource', resourceRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
