
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js'

dotenv.config()
const app = express();
app.use(express.json());

mongoose.connect(
  process.env.MONGO || "mongodb://localhost:27017"
)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((error) => {
    console.log(error)
  });







app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

// app.get("/",(req,res)=>{
//   res.send("hello sahil")
// })
app.listen(3035, () => {
  console.log('Server is running on `http://localhost:3035/`')
});