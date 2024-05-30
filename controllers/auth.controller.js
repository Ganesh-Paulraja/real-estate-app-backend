import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';


export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10)  //<--this nomber going to merge with bcrypt for randomising
  const newUser = new User({username, email, password: hashedPassword}); //<-- we are changeing the value of this particular key others comes with default value
  try {
    await newUser.save();
    res.status(201).json("user created successfully")
  } catch (error) {
    // next(error);
    next(errorHandler(550, 'error form the fucntion'))
  }
}

// console.log(new User())