import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import Listing from "../models/listing.model.js";

export const test = (req, res) => {
  res.json({
    massage: 'Hello World 2 =' + req.params.id,
  })
}

export const updateUserInfo = async (req, res, next) => {
  if (req.user && req.user.id == req.params.id) {
    try {
      if (req.body.password) {
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
      }
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        } },
        { new: true }
      );

      if (!updatedUser) {
        return next(errorHandler(404, 'User not found'));
      }

      const { password, ...rest } = updatedUser._doc;
      return res.status(200).json(rest);
    } catch (error) {
      return next(error);
    }
  } else {
    return next(errorHandler(401, 'You can only update your own account'))
  }
};



export const deleteUser = async (req, res, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, 'You can only delete your own account!'));
    }
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return next(errorHandler(404, 'User not found'));
    }
    res.clearCookie('access_token');
    res.status(200).json({ message: 'User has been deleted' });
  } catch (error) {
    next(error);
  }
};

export const getUserListing = async (req, res, next) => {
  if(req.user.id !== req.params.id) {
    return next(errorHandler(401, 'You can only view your own listing'))
  } 
  try {
    const listing = await Listing.find({userRef : req.params.id});
    res.status(200).json(listing);
  } catch (error) {
    next(error)
  }
}