// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Import comments array
const comments = require('./comments');

// Route to get all comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Route to get comments by ID
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  res.send(comment);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});