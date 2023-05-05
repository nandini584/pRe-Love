import React, { useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom"
import avatar from '../Images/person.png'
import toast, {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {ValidateLogin} from './Validate';
import { useAuthStore } from '../Store/store'; 
import styles from '../styles/login.module.css'
import { verifyPassword } from './helper';

const Login = () => {
    const navigate = useNavigate();
    const formikLogin=useFormik({
        initialValues : {
            username : '',
            password: '',
        },
        validate : ValidateLogin,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            // setUsername( values.username );
            const loginPromise = verifyPassword({username : values.username, password :values.password})
            toast.promise(loginPromise,{
                loading: 'verifying password...',
                success : <b>Logged in Successfully...!</b>,
                error : <b>Incorrect password.</b>
            })
            loginPromise.then(res =>{
                const { token } = res.data
                localStorage.setItem('token', token);
                navigate('/profileview')
            })
        }
    })
  return (
    <>
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

                <form onSubmit={formikLogin.handleSubmit} className="py-1">
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} alt="avatar" className={styles.profile_img} />
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6'>
                        <input {...formikLogin.getFieldProps('username')} type="text" placeholder="Username" className={styles.textbox} required/>
                        <input {...formikLogin.getFieldProps('password')} type="password" placeholder='Password' className={styles.textbox} required/>
                        <button type="submit" className={styles.btn}>Let's Go</button>
                    </div>

                    <div className='text-center py-4 flex flex-col'>
                        <span className='text-gray-500'>Not a member? <Link to="/register" className="text-red-500">Register Now</Link></span>
                        <span className='text-gray-500'>Forgot password? <Link to="/recover" className="text-red-500">Recover Now</Link></span>
                    </div>
                </form>

                <div className=''>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Login