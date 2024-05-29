import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

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


app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

