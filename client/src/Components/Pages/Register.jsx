import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import avatar from '../Images/person.png'
import toast,{Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {ValidateRegister} from './Validate';
import convertToBase64 from'./convert'
import styles from '../styles/login.module.css'
import { registerUser } from './helper';

const Register = () => {
    
    const navigate = useNavigate();
    const [ file , setFile ] = useState('');

    const formikRegister=useFormik({
        initialValues : {
            firstName : '',
            lastName : '',
            username : '',
            password : '',
            email : ''
        },
        validate : ValidateRegister,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign( values, { profile : file || '' })
            // console.log(values)
            const registerPromise=registerUser(values)
            toast.promise(registerPromise, {
                loading: 'Creating...',
                success : <b>Register Successfully...!</b>,
                error : <b>Could not Register.</b>
              });
              registerPromise.then(function(){ navigate('/login')} )
        }
    })

    // formik does not support file type inputs so we need to add an handler over here.
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]) ;
        setFile(base64)
    }

  return (
    <>
    <div className='container m-auto font-Montserrat'>
        <Toaster position='top-center' reverseOrder={false}/>

        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass} style={{width:"45%",paddingTop:"3em",}}>

                <div className="title flex flex-col items-center">
                    <h3 className="text-5xl font-bold">Register</h3>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Happy to join you
                    </span>
                </div>

                <form onSubmit={formikRegister.handleSubmit} className="py-1">
                    <div className='profile flex justify-center py-4'>
                        <label htmlFor="profile">
                            <img src={file || avatar} alt="avatar" className={styles.profile_img} />
                        </label>
                        <input onChange={ onUpload } type="file" name="profile" id='profile'/>
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6'>

                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <input {...formikRegister.getFieldProps('firstName')} type="text" placeholder="First Name" className={styles.textbox} required/>
                                <input {...formikRegister.getFieldProps('lastName')} type="text" placeholder='Last Name' className={styles.textbox} required/>
                            </div>
                            <input {...formikRegister.getFieldProps('username')} type="text" placeholder="Username" className={styles.textbox} required/>
                            <input {...formikRegister.getFieldProps('email')} type="email" className={styles.textbox} placeholder='Enter your Email' required/>
                            <input {...formikRegister.getFieldProps('password')} type="text" className={styles.textbox} placeholder='Enter a password' required/>
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
    </>
  )
}

export default Register