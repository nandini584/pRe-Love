import React from 'react'
import {Link} from "react-router-dom"
import avatar from '../Images/person.png'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {ValidateOTP} from './Validate';
 
import styles from '../styles/login.module.css'
const Recover = () => {
    const formikOTP=useFormik({
        initialValues : {
            OTP : ''
        },
        validate : ValidateOTP,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        }
    })
  return (
    <>
    <div className='container m-auto font-Montserrat'>
        <Toaster position='top-center' reverseOrder={false}/>

        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass}>

                <div className="title flex flex-col items-center">
                    <h3 className="text-5xl font-bold">Enter OTP</h3>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Enter the 6 digit OTP sent to your registered email.
                    </span> 
                </div>

                <form onSubmit={formikOTP.handleSubmit} className="py-1">
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} alt="avatar" className={styles.profile_img} />
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6'>
                        <input {...formikOTP.getFieldProps('OTP')} type="number" placeholder="OTP" className={styles.textbox}/>
                        <button type="submit" className={styles.btn}>Submit</button>
                    </div>
                    <div className='text-center py-4'>
                        <span className='text-gray-500'>Didn't recieve OTP? <Link to="/register" className="text-red-500">Resend OTP</Link></span>
                    </div>
                </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default Recover