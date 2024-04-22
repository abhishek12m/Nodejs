const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const resourceRoutes = require('./routes/resourceRoutes');
app.use('/resource', resourceRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
