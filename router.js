// routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

router.get('/details', (req, res) => {
  res.send('This is the about page.');
});

router.post('/thankyou', (req, res) => {
  res.send('Form submitted successfully!');
});

router.route('/second')
  .get((req, res) => {
    res.send('Contact us!');
  })
  .post((req, res) => {
    res.send('Contact form submitted!');
  });

module.exports = router;
