import React, { useEffect } from 'react'
import {useNavigate, Navigate} from "react-router-dom"
import avatar from '../Images/person.png'
import toast,{Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {ValidateReset} from './Validate';
import { resetPassword } from './helper';
import { useAuthStore } from '../Store/store';
import useFetch from './profileHook';
 
import styles from '../styles/login.module.css'
const ResetPassword = () => {
    const navigate = useNavigate();
    const {username } =  useAuthStore(state => state.auth)
    const [{isLoading, apiData, status, serverError}] = useFetch('createRestSession')

    useEffect(()=>{
        console.log(apiData, status)
    },[apiData, status])

    const formikChangePassword=useFormik({
        initialValues : {
            newPassword : '',
            reenteredNewPassword : '',
        },
        validate : ValidateReset,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            let resetPromise = resetPassword({username, password : values.newPassword})
            toast.promise(resetPromise,{
                loading : "Veriifying password",
                success: <b>Password changed successfully</b>,
                error: <b>Failed to change password ! </b>
            })
            resetPromise.then(()=>{
                navigate('/login')
            })
        }
    })

    if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
    if(serverError) return <h1 className='text-xl text-red-500'>{ navigate('/login')}</h1>
    if(status && status !== 201){
        return <Navigate to ={'/login'} replace={true} />
    }
  return (
    <>
    <div className='container m-auto font-Montserrat'>
        <Toaster position='top-center' reverseOrder={false}/>

        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass}>

                <div className="title flex flex-col items-center">
                    <h3 className="text-5xl font-bold">Enter new password</h3>
                </div>

                <form onSubmit={formikChangePassword.handleSubmit} className="py-1">
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} alt="avatar" className={styles.profile_img} />
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6'>
                        <input {...formikChangePassword.getFieldProps('newPassword')} type="text" placeholder="Enter new password" className={styles.textbox} required/>
                        <input {...formikChangePassword.getFieldProps('reenteredNewPassword')} type="text" placeholder='Re-enter new password' className={styles.textbox} required/>
                        <button type="submit" className={styles.btn}>Change Password</button>
                    </div>

                    {/* <div className='text-center py-4'>
                        <span className='text-gray-500'>Not a member? <Link to="/login" className="text-red-500">Register Now</Link></span>
                    </div> */}
                </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default ResetPassword