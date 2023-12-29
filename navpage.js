const express = require('express');
const app = express();
const port = 3000;

// Set up a route for the home page (GET request)
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Set up a route for a different page (GET request)
app.get('/details', (req, res) => {
  res.send('This is the about page.');
});

// Set up a route for a page that accepts POST requests
app.post('/thankyou', (req, res) => {
  res.send('Form submitted successfully!');
});

// Set up a route for a page that accepts both GET and POST requests
app.route('/second')
  .get((req, res) => {
    res.send('Contact us!');
  })
  .post((req, res) => {
    res.send('Contact form submitted!');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
