// app.js
const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');

// Middleware to parse the request body for form submissions
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in the routes.js file
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
