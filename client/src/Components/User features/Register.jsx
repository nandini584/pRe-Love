import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom"
import toast,{Toaster} from 'react-hot-toast';
import styles from '../styles/login.module.css'
import convertToBase64 from '../Pages/convert';
import {clearErrors, register } from '../actions/userActions';
import LoadingPage from '../Loading Page/LoadingPage';
import avatarIcon from './avatar';
import { useSelector,useDispatch } from 'react-redux';

const Register = () => {
    const [registerForm , setRegisterForm ] = useState({
        name:'',
        email:'',
        password:''
    });
    const dispatch = useDispatch()
    const {error, user, loading, isAuthenticated} = useSelector((state)=>state.user)
    const [avatar, setAvatar]= useState(avatarIcon);
    const {name, email, password}= registerForm;
    const navigate = useNavigate();

    const registerChange = async (e) => {
        if(e.target.name=='avatar'){
            const base64 = await convertToBase64(e.target.files[0]) ;
        setAvatar(base64);

        }else{
        setRegisterForm({...registerForm,[e.target.name]:e.target.value})
        console.log(registerForm)
        }
    }
    const registerSubmit = async (e) => {
        e.preventDefault();
        if(error){
            toast.error(error);
            dispatch(clearErrors())
        }
        const form = new FormData();
        form.set('name',name);
        form.set('email',email);
        form.set('password',password);
        form.set('avatar',avatar)
        dispatch(register(form))
    }
    useEffect(()=>{
        if(error && error!=='Please Login to access this resource'.toLowerCase()){
            toast.error(error);
            dispatch(clearErrors())
        }
        if(isAuthenticated){
            navigate('/profileview')
        }
        console.log(error, user, loading, isAuthenticated)

    },[error, user, loading, isAuthenticated]) 
  return (loading ? <LoadingPage/> :   (
    <>
    <div className='container m-auto font-Montserrat'>
        <Toaster position='top-center' reverseOrder={false}/>

        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass}>

                <div className="title flex flex-col items-center">
                    <h3 className="text-5xl font-bold">Register</h3>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Happy to join you
                    </span>
                </div>

                <form onSubmit={registerSubmit} className="py-1">
                    <div className='profile flex justify-center py-4'>
                        <label htmlFor="profile">
                            <img src={avatar} alt="avatar" className={styles.profile_img} />
                        </label>
                        <input type="file" name="avatar" id='profile' onChange={registerChange}/>
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6 '>

                        <div className="flex flex-col gap-6 w-[30vw] min-w-[300px] items-center">
                            <input type="text" placeholder="Name" className={styles.textbox} value={name} name="name" onChange={registerChange} required/>
                            <input type="email" className={styles.textbox} placeholder='Enter your Email' value={email} name="email" onChange={registerChange} required/>
                            <input type="text" className={styles.textbox} placeholder='Enter a password' value={password} name="password" onChange={registerChange} required/>
                        </div>
                        
                        <button type="submit" className={styles.btn}>Register </button>
                    </div>

                    <div className='text-center py-4'>
                        <span className='text-gray-500'>Already a member? <Link to="/login" className="text-red-500">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>

    </div>
    </>)
  )
}

export default Register