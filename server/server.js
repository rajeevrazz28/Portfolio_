const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
// import axios from 'axios';

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 }).then(()=>{
  console.log("Database is Connected");
 }).catch((err)=>
 console.log("Connection failed")
 );

// Parse incoming JSON requests

// const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  content: String,
  // Add more fields as needed
});

const User = mongoose.model('User', userSchema);

// Import routes
// const userRoutes = require('./routes/user');
// app.use('/api/users', userRoutes);

app.post('/api/submit', async (req, res) => {
  try {
    // console.log(req.body.name);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      content: req.body.content
      // Add more fields as needed
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.warn("active");
});
