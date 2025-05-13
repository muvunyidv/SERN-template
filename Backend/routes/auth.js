const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/register', (req, res) => {
  const { username, password } = req.body;
  const q = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(q, [username, password], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'User registered' });
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const q = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(q, [username, password], (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length > 0) {
      req.session.user = results[0];
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logged out' });
});

module.exports = router;
