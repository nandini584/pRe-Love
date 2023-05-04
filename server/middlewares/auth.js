import jwt from 'jsonwebtoken'
import ENV from '../config.js'

export default async function Auth( req, res, next ){
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decodedToken = await jwt.verify(token , ENV.JWT_token);
        req.user = decodedToken;
        next()
    } catch (error) {
        return res.status(401).json({error : "Authentication Failed"})
    }
}

export function localVariables( req, res, next ){
    // res.json(req.app)
    req.app.locals = {
        OTP : null, 
        resetSession : false
    }
    next()
}  