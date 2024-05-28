import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import userRouter from './routes/user.route.js'

mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB!')
}).catch((err) => {
  console.log(err);
});

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// app.get('/test', (req, res) => {
//   // res.send('hello world')
//   res.json({
//     massage: "hello world"
//   })
  
// })

app.use('/api/user', userRouter);