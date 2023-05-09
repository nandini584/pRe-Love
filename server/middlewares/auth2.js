import { Errorhandler } from '../utils/errorHandler.js'
import asyncCatch from '../middlewares/catchAsyncError.js'
import ENV from '../config.js'
import jwt from 'jsonwebtoken';
import User from '../models/userModel2.js';

export const isAuthenticatedUser = asyncCatch(async (req, res, next) => {
   console.log("hi from me",req.cookies);
    const {token} = req.cookies
    if (!token) {
    return next(new Errorhandler("Please Login to access this resource", 401));
    }

  const decodedData = jwt.verify(token, ENV.JWT_token);
    console.log(decodedData);
  req.user = await User.findById(decodedData.id);
  console.log(req.user)
  next();
});

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new Errorhandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }
    next();
  };
};
