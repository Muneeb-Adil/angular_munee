const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = 'mongodb://localhost:27017/quiz';

// Define the User schema and model
const userSchema = new mongoose.Schema({
  id:Number,
  name: String,
  email: String,
  dateOfBirth: String,
  quizCategory: String,
  marks: Number
});

const User = mongoose.model('User', userSchema); // Define User model once

app.use(express.json());
app.use(cors());

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1);
});

// POST route to save a new user
app.post('/api/users', (req, res) => {
  const userData = req.body;
  console.log(userData);
  const newUser = new User({
    id:userData.id,
    name: userData.name,
    email: userData.email,
    dateOfBirth: userData.date_of_birth,
    quizCategory: userData.attemptedQuizCategory,
    marks: userData.marks
  });
  console.log(newUser);

  newUser.save()
    .then(() => {
      console.log('User saved successfully');
      res.status(201).json({ message: 'User saved successfully' });
    })
    .catch((error) => {
      console.error('Error saving user:', error);
      res.status(500).json({ error: 'Failed to save user' });
    });
});

// GET route to fetch all users
app.get('/api/users', (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
