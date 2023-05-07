import { Navigate } from "react-router-dom";

export const AuthorizeUser= ({ children }) =>{
    const token = localStorage.getItem('token')
    // console.log(token)
    if (!token){
        return <Navigate to={'/login'} replace={true} />
    }

    return children;
}
