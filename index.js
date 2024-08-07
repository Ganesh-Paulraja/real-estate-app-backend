// npm init -y   --> package.json --> "type": "module"
//npm i express, nodemon, dotenv, ---\ mongoose,  bcryptjs, jsonwebtoken
// "start": "node index.js",
// "dev": "nodemon index.js"

import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// const cors = require('cors');
import cors from 'cors';
dotenv.config();
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js'
import cookieParser from 'cookie-parser'

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

app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

//middleware
app.use((err, req, res, next) => {
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,// if we have same variable of key name inside function key will automatically upadate (ES6 future)
    message,
  });
});