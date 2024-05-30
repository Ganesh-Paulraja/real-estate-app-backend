// npm init -y   --> package.json --> "type": "module"
//npm i express, nodemon, mongoose, dotenv, bcryptjs

import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB!')
}).catch((err) => {
  console.log(`db error ${err}`);
});

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})


app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

//middleware
app.use((err, req, res, next) => {
  // if we have same variable of key name inside functino key will automatically upadate (ES6 future)
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});