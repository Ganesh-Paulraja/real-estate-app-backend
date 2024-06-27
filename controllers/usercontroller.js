import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
  res.json({
    massage: 'Hello World 2',
  })
}

export const updateUserInfo = async (req, res, next) => {
  if(req.user.id !== req.params.id) return next(errorHandler(401, 'You can only update your own account'))
  try {
    if(req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10)
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      // use this method to avoid admin permision from testing
      $set: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
      }
    }, {new: true})
  const {password, ...rest} = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
  res.send(req.body.password)
}