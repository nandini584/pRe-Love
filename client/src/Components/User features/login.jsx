import React,{useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import avatar from '../Images/person.png'
import toast, {Toaster} from 'react-hot-toast';
import styles from '../styles/login.module.css'
import { useSelector,useDispatch } from 'react-redux';
import { clearErrors, login} from '../actions/userActions';
import LoadingPage from '../Loading Page/LoadingPage'; 
const Login = ( ) => {
    const navigate = useNavigate();
    const {error, user, loading, isAuthenticated} = useSelector((state)=>state.user)
    const dispatch = useDispatch();
    const [ email , setEmail ] = useState();
    const [password, setPassword ] = useState();
    const emailChange = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }
    const loginSubmit = (e) =>{
        e.preventDefault()
        dispatch(login(email,password))
    }
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearErrors())
        }
        if(isAuthenticated){
            navigate('/profileview')
        }
    },[dispatch,navigate,error, user, loading, isAuthenticated]) 
  return (loading ? <LoadingPage/> :     (<>
      <div className='container m-auto font-Montserrat'>
          <Toaster position='top-center' reverseOrder={false}/>
  
          <div className="flex justify-center items-center h-screen">
              <div className={styles.glass}>
  
                  <div className="title flex flex-col items-center">
                      <h3 className="text-5xl font-bold">Hello Again!</h3>
                      <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                          Explore more by connecting with us.
                      </span>
                  </div>
  
                  <form onSubmit={loginSubmit} className="py-1">
                      <div className='profile flex justify-center py-4'>
                          <img src={avatar} alt="avatar" className={styles.profile_img} />
                      </div>
                      
                      <div className='textbox flex flex-col items-center gap-6'>
                          <input type="text" placeholder="Email" className={styles.textbox} onChange={emailChange} value={email} required/>
                          <input type="password" placeholder='Password' className={styles.textbox} onChange={passwordChange} value={password} required/>
                          <button type="submit" className={styles.btn}>Let's Go</button>
                      </div>
  
                      <div className='text-center py-4 flex flex-col'>
                          <span className='text-gray-500'>Not a member? <Link to="/register" className="text-red-500">Register Now</Link></span>
                          <span className='text-gray-500'>Forgot password? <Link to="/password/forgot" className="text-red-500">Recover Now</Link></span>
                      </div>
                  </form>
  
                  <div className=''>
                  </div>
              </div>
          </div>
  
      </div>
      </>)
  )
}


export default Login