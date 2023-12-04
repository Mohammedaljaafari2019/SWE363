// routes.js
const express = require('express');
const router = express.Router();

// Middleware function to process the form submission
const processForm = (req, res, next) => {
  // Assuming the form data is sent in the request body
  const formData = req.body;

  // Process the form data (for now, just log it)
  console.log('Form Data:', formData);

  // Return a response to confirm form submission
  res.send('Form submitted successfully!');
};

router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

router.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Use the middleware for processing the form submission
router.post('/submit', processForm);

router.route('/contact')
  .get((req, res) => {
    res.send('Contact us!');
  })
  .post(processForm);

module.exports = router;
