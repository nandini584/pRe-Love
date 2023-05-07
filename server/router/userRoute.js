import express from 'express'
import {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} from "../controllers/userController.js";

import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth2.js";

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logout);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("owner"), getAllUser);

router.route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizeRoles("owner"), getSingleUser)
  .put(isAuthenticatedUser, authorizeRoles("owner"), updateUserRole)
  .delete(isAuthenticatedUser, authorizeRoles("owner"), deleteUser);

export default router
