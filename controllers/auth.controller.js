import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  await newUser.save();
  const hashedPassword = bcryptjs.hashSync(password, 10)  //<--this nomber going to merge with bcrypt
  const newUser = new User({username, email, hashedPassword});
  res.status(201).json("user created successfully")
}

// console.log(new User())