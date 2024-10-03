import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Handler, Context } from 'aws-lambda';
import serverless from 'serverless-http';

const app = express();

app.use(express.json());

// Connect to MongoDB (replace with your actual connection string)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/healthcare', { useNewUrlParser: true, useUnifiedTopology: true });

// Define User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['patient', 'doctor'] },
  license: String,
  specialty: String,
  verified: { type: Boolean, default: false }
});

const User = mongoose.model('User', UserSchema);

// User registration
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, role, license, specialty } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword, role, license, specialty });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// User login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'your_jwt_secret');
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Implement other API endpoints for appointments, chat, etc.

const handler: Handler = (event: any, context: Context) => {
  return serverless(app)(event, context);
};

export { handler };