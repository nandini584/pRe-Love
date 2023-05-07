import passport from "passport";
import { Router } from "express";
const router=Router();

//importing all the controllers
import Auth, { localVariables }from '../middlewares/auth.js'
import * as controller from '../controllers/appController.js'
import { registerMail } from "../controllers/mailer.js";

/**POST Methods */
router.route('/register').post(controller.register) //errors in front part 
router.route('/registerMail').post(registerMail); //send email
router.route('/authenticate').post( controller.verifyUser, (req,res) => res.end());//authenticate user
router.route('/login').post( controller.verifyUser , controller.login); //to login into their account

/**GET Methods */
router.route('/user/:username').get(controller.getUser);//to get the usename of the user
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP); //to generate OTP for password reset
router.route('/validateOTP').get(controller.verifyUser, controller.validateOTP); //to verify the OTP mathces 
router.route('/createResetSession').get(controller.createResetSession); //to reset all variables

/**PUT Methods */
router.route('/updateuser').put( Auth , controller.udpdateUser); // update user profile
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword); // use to reset password

export default router;