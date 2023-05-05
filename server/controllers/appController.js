import UserModel from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import ENV from '../config.js';
import otpGenerator from 'otp-generator';

/**middlewares */
export async function verifyUser( req, res, next ){
    try {
        const { username } = req.method == "GET" ? req.query : req.body ;

        //checking for the match
        UserModel.findOne({username}).then( data =>{
            if(!data) return res.status(400).send({ error : " No user found "})
            next()
        }).catch(error => {
            // console.log(error)
            return res.status(400).send( { error : " No user found "} )
        })
        // let exist = UserModel.findOne({username});
        // console.log(exist);
        // if(!exist) return res.status(400).send({ error : " No user found "})
        // next();
    } catch (error) {
        return res.status(404).send({ error : "Authentication failed "})
    }
}

//for post method register
/**POST http://localhost:8080/api/register */
export async function register(req,res){

    try {
        const { username, password, email, profile } = req.body;        

        // check the existing user

        // const existUsername = new Promise((resolve, reject) => {
        //     UserModel.findOne({ username }, function(err, user){
        //         if(err) reject(new Error(err))
        //         if(user) reject({ error : "Please use unique username"});

        //         resolve();
        //     })
        // });

        const existUsername = new Promise(async (resolve, reject) => {
            UserModel.findOne({username}).then( function( user ){
                if(user) reject ({ error : "Please enter a unique username" })
                resolve();
            }).catch( function (err){
                reject( new Error(err))
            })
        });

        // check for existing email
        const existEmail = new Promise(async (resolve, reject) => {
            UserModel.findOne({email}).then( function( email ){
                if(email) reject ({ error : "Please enter a unique email" })
                resolve();
            }).catch( function (err){
                reject( new Error(err))
            })
        });

        console.log(existEmail, existUsername)
        Promise.all([existUsername, existEmail]).then(() => {

                if( password ){
                    bcrypt.hash(password, 10)
                        .then( hashedPassword => {
                            
                            const user = new UserModel({
                                username,
                                password: hashedPassword,
                                profile: profile || "",
                                email
                            });

                            // return save result as a response
                            user.save()
                                .then(result => res.status(201).send({ msg: "User Register Successfully"}))
                                .catch(error => res.status(500).send({error}))

                        }).catch(error => {
                            return res.status(500).send({
                                error : "Enable to hashed password"
                            })
                        })
                }
            }).catch(error => {
                return res.status(400).send({ error })
            })


    } catch (error) {
        return res.status(500).send(error);
    }

}

//for post method login
/**POST http://localhost:8080/api/login */
export async function login(req,res){
    const {username, password}= req.body;

    UserModel.findOne({username}).then(user=>{
        bcrypt.compare(password, user.password).then(passwordCheck => {
            if (!passwordCheck) return res.status(400).send({error: "Don't have password"})

            //creating a jwt
            const token = jwt.sign({
                            userId :user._id,
                            username: user.username,
                        },ENV.JWT_token, {expiresIn: "24h"})
            
            return res.status(200).send({
                msg: "login successful",
                username: user.username,
                token
            })

        }).catch( error => {
            return res.status(400).send({error: "Password does not match"})
        })
    })
    .catch( error=>{
        return res.status(404).send({error : "username not found"})
    })
    // const userMatch = await UserModel.findOne({username});
    // if (userMatch == null) {
    //     reject({error: "Please enter a valid username"})
    // }else if ( username.password !== password){
    //     reject({error: "incorrect password"});
    // }
    // res.json('login route');
    // relsolve()
}

//for get method user
/**GET http://localhost:8080/api/user/<username> */
export async function getUser(req,res){
    const { username }= req.params;
    console.log(!username);
    try {
        if (!username) return res.status(501).send({error : "invalid username"})

        const user = await UserModel.findOne({username});
            if (!user) return res.status(502).send({ error : "cannot find the user"})

        //     /** remove password from user */
        //     // mongoose return unnecessary data with object so convert it into json
            const { password, ...rest } = Object.assign({}, user.toJSON());
            return res.status(201).send(rest);

    } catch (error) {
        return res.status(404).send({ error : "cannot find user data"})
    }
}

//for put method of update user
/**PUT http://localhost:8080/api/updateuser */
export async function udpdateUser(req,res){
    try {
        
        // const id = req.query.id;
        const { userId } = req.user;

        if(userId){
            const body = req.body;

            // update the data
            // UserModel.updateOne({ _id : id }, body, function(err, data){
            //     if(err) throw err;

            //     return res.status(201).send({ msg : "Record Updated...!"});
            // })
            UserModel.updateOne({ _id : userId }, body).then( function(data) {
                return res.status(201).send({ msg : "Record Updated...!"});
            }).catch(function(err){ 
                throw err;
            })

        }else{
            return res.status(401).send({ error : "User Not Found...!"});
        }

    } catch (error) {
        return res.status(401).send({ error });
    }
}

//for get method of generate OTP 
/**GET http://localhost:8080/api/generateOTP */
export async function generateOTP(req,res){
    req.app.locals.OTP = await otpGenerator.generate(6,{ lowerCaseAlphabets :false , upperCaseAlphabets : false , specialChars : false })
    return res.status(201).send({ code : res.app.locals.OTP })
}

//for get method of validate OTP 
/**GET http://localhost:8080/api/validateOTP */
export async function validateOTP(req,res){
    const { code } = req.query;
    // console.log( code );
    if(parseInt(req.app.locals.OTP) === parseInt(code)){
        req.app.locals.OTP = null; // reset the OTP value
        req.app.locals.resetSession = true; // start session for reset password
        return res.status(201).send({ msg: 'Verify Successsfully!'})
    }
    return res.status(400).send({ error: "Invalid OTP"});
}

//sucessfully redirect user when OTP is valid
/**GET http://localhost:8080/api/createResetSession */
export async function createResetSession(req,res){
    if(req.app.locals.resetSession){
        return res.status(201).send({ flag : req.app.locals.resetSession})
   }
   return res.status(440).send({error : "Session expired!"})
}

/**PUT http://localhost:8080/api/resetpassword */
export async function resetPassword(req,res){
    try {
        
        if(!req.app.locals.resetSession) return res.status(440).send({error : "Session expired!"});

        const { username, password } = req.body;

        try {
            
            UserModel.findOne({ username})
                .then(user => {
                    bcrypt.hash(password, 10)
                        .then(hashedPassword => {
                            UserModel.updateOne({ username : user.username },{ password: hashedPassword}).then(data => {
                                req.app.locals.resetSession = false ; //reset session
                                return res.status(201).send({ msg : "Record Update...!"});
                            }).catch(error =>{
                                throw error
                            })
                            //     , function(err, data){
                            //     if(err) throw err;
                            //     req.app.locals.resetSession = false; // reset session
                            //     return res.status(201).send({ msg : "Record Updated...!"})
                            // });
                        })
                        .catch( e => {
                            return res.status(500).send({
                                error : "Enable to hashed password"
                            })
                        })
                })
                .catch(error => {
                    return res.status(404).send({ error : "Username not Found"});
                })

        } catch (error) {
            return res.status(500).send({ error })
        }

    } catch (error) {
        return res.status(401).send({ error })
    }
}

