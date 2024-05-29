import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
<<<<<<< HEAD
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
mongoose.connect(process.env.MONGO)
.then(() => {
=======

mongoose.connect(process.env.MONGO).then(() => {
>>>>>>> ac4692313567ede21969d7db19367f2b8527ca18
  console.log('Connected to MongoDB!')
}).catch((err) => {
  console.log(err);
});

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
<<<<<<< HEAD
})


app.use(express.json());
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
=======
})
>>>>>>> ac4692313567ede21969d7db19367f2b8527ca18
