import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import avatar from '../Images/person.png'
import toast,{Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {ValidateProfile} from './Validate';
import convertToBase64 from'./convert'
import useFetch from './profileHook';
import styles from '../styles/login.module.css'
import { updateUser } from './helper';

const Profile = () => {
    
    const navigate= useNavigate();
    const [file,setFile] = useState('');
    const [{ isLoading, apiData, serverError }] =  useFetch();

    const formikRegister=useFormik({
        initialValues : {
            firstName : apiData?.firstName || '',
            lastName : apiData?.lastName || '',
            email : apiData?.email || '1234567',
            address :apiData?.address || '',  
            Mobile : apiData?.mobile || ''
        },
        validate : ValidateProfile,
        validateOnBlur: false,
        validateOnChange: false,
        enableReinitialize: true,
        onSubmit: async values => {
            values = await Object.assign( values, { profile : file ||apiData?.profile ||'' })
            // console.log(values => ({...values, firstName : "rimsi"}))
            const updatePromise = updateUser({firstName :values.firstName, lastName: values.lastName, mobile: values.Mobile, address: values.address, email: values.email, profile: values.profile });
            toast.promise(updatePromise,{
                loading : "updating...",
                success : <b>Updated successfully...!</b>,
                error : <b>Update failed! Please try Again...</b>
            })
            // navigate('/profileview')
        }
    })

    // formik does not support file type inputs so we need to add an handler over here.
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]) ;
        setFile(base64)
    }

    if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
    if(serverError) return <h1 className='text-xl text-red-500'>{ navigate('/login')}</h1>

  return (
    <>
    <div className='container m-auto font-Montserrat'>
        <Toaster position='top-center' reverseOrder={false}/>

        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass} style={{width:"45%",paddingTop:"3em",height:"fit-content"}}>

                <div className="title flex flex-col items-center">
                    <h3 className="text-5xl font-bold">Profile</h3>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Hello {formikRegister.initialValues.firstName} {formikRegister.initialValues.lastName}
                    </span>
                </div>

                <form onSubmit={formikRegister.handleSubmit} className="py-1">
                    <div className='profile flex justify-center py-4'>
                        <label htmlFor="profile">
                            <img src={ apiData?.profile || file || avatar} alt="avatar" className={styles.profile_img} />
                        </label>
                        <input onChange={ onUpload } type="file" name="profile" id='profile'/>
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6'>

                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <input {...formikRegister.getFieldProps('firstName')} type="text" placeholder="First Name" className={styles.textbox} />
                                <input {...formikRegister.getFieldProps('lastName')} type="text" placeholder='Last Name' className={styles.textbox} />
                            </div>
                            <input {...formikRegister.getFieldProps('Mobile')} type="number" className={styles.textbox} placeholder='Enter your mobile mumber' />
                            <input {...formikRegister.getFieldProps('email')} type="email" className={styles.textbox} placeholder='Enter your Email' required/>
                            <input {...formikRegister.getFieldProps('address')} type="text" className={styles.textbox} placeholder='Enter your address'/>
                        </div>
                 
                        
                        <button type="submit" className={styles.btn} to='/'>Save Changes</button>
                    </div>

                    <div className='text-center py-4 flex flex-col'>
                        <span><Link to="/recover" className="text-red-500">Change passowrd</Link></span>
                        <span><Link to="/profileview">Back to Profile</Link></span>
                    </div>
                </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default Profile