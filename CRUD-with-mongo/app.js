const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const usersRoute = require('./routes/users');

const app = express();

app.use(bodyParser.json());

// Routes
app.use('/users', usersRoute);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
