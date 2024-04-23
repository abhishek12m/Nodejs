require('dotenv').config();
const express = require('express');
const exphbs  = require('express-handlebars').create({});

const app = express();

// Set Handlebars as the default template engine
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// Set up static directory to serve static files
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

app.get('/json', (req, res) => {
    res.json({ message: 'Hello JSON' });
});

// Handle 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not Found' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
