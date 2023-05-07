import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useAuthStore } from '../Store/store';
import avatar from '../Images/person.png'
import toast,{Toaster} from 'react-hot-toast';
// import {useFormik} from 'formik';
// import {ValidateOTP} from './Validate';
import { generateOTP, verifyOTP } from './helper';
 
import styles from '../styles/login.module.css'
const Recover = () => {
    const navigate = useNavigate();
    const { username } = useAuthStore(state => state.auth);
    // console.log(username)
    var [OTP, setOTP] = useState(); 

    useEffect(()=>{
        generateOTP( username ).then((OTP)=>{
            // console.log(OTP);

            if(OTP) return toast.success(" An OTP has been sent to your email");
            return toast.error("Failed to generate OTP! Please try again after sometime")
        })
    },[username])

    async function onSubmit( e ) { 
        e.preventDefault();
        try {
            let { status } = await verifyOTP({username ,code: OTP});
            if(status === 201 ){
                toast.success("OTP verified successfully");
                return navigate('/reset');
            }
        } catch (error) {
            return toast.error(" Incorrect OTP !! please check your email again")
        }
       

        
    }

    function resendOTP() {
        const resendPromise = generateOTP(username);
        toast.promise(resendPromise,{
            loading: "sending OTP",
            success: <b>OTP sent successfully</b>,
            error: <b>Failed to generate OTP! Please try again after sometime</b>
        })

        resendPromise.then((OTP)=>{
            // console.log(OTP);
        })
    }

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

                <form className="py-1" onSubmit={onSubmit}>
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} alt="avatar" className={styles.profile_img} />
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6'>
                        <input type="number" onChange={(e) =>setOTP(e.target.value)}  placeholder="OTP" className={styles.textbox}/>
                        <button type="submit" className={styles.btn}>Submit</button>
                    </div>
                </form>
                    <div className='text-center py-4'>
                        <span className='text-gray-500'>Didn't recieve OTP? <p className="text-red-500" onClick={resendOTP}>Resend OTP</p></span>
                    </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Recover