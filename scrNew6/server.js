const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const users = [
    { email: 'dineshdinu492@gmail.com', password: 'Sneha143' },
    { email: 'user2@example.com', password: 'password2' },
  ];

app.post('/signin', (req, res) => {
    const { email, password } = req.body;
console.log('EMAIL & PASSWORD',email,password);
  // Perform authentication here, e.g. check if the username and password match with the data in a database.
  // For this example, we'll assume that the username is "user" and the password is "pass".
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ message: 'Success' });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get("/", (req, res) => {
    res.send("Welcome to ExpressD.js!");
  });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
