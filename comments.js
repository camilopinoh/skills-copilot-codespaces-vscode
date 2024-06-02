// Create web server
// Create an API that returns the comments
// http://localhost:3000/comments
// http://localhost:3000/comments/:id

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { id: 1, author: 'John', text: 'Hello' },
  { id: 2, author: 'Jane', text: 'Hi' },
  { id: 3, author: 'Jack', text: 'Hey' },
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Run the server
// Open browser and go to http://localhost:3000/comments
// Open browser and go to http://localhost:3000/comments/2
// Open browser and go to http://localhost:3000/comments/5