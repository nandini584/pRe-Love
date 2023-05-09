import React from "react";
import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";
const AuthorizeUser =({children}) =>{
    const { isAuthenticated } = useSelector((state) => state.user);
    if(!isAuthenticated){
        return <Navigate to='/login' replace={true}/>
    }
    return children
}
export default AuthorizeUser;