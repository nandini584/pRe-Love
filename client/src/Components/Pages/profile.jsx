import React, { useState } from 'react'
import {Link} from "react-router-dom"
import avatar from '../Images/person.png'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {ValidateProfile} from './Validate';
import convertToBase64 from'./convert'
import styles from '../styles/login.module.css'
const Profile = () => {
    
    const [file,setFile] = useState('');

    const formikRegister=useFormik({
        initialValues : {
            firstName : 'Ayush',
            lastName : 'Kumar',
            email : 'itsayushkumar123@gmail.com',
            address : '',
            Mobile : ''
        },
        validate : ValidateProfile,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            values = await Object.assign( values, { profile : file ||'' })
            console.log(values)
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
                    <h3 className="text-5xl font-bold">Profile</h3>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Hello {formikRegister.initialValues.firstName} {formikRegister.initialValues.lastName}
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
                            <input {...formikRegister.getFieldProps('Mobile')} type="number" className={styles.textbox} placeholder='Enter your mobile mumber' required/>
                            <input {...formikRegister.getFieldProps('email')} type="email" className={styles.textbox} placeholder='Enter your Email' required/>
                        </div>
                 
                        
                        <button type="submit" className={styles.btn}>Save Changes</button>
                    </div>

                    <div className='text-center py-4'>
                        <span><Link to="/recover" className="text-red-500">Change passowrd</Link></span>
                    </div>
                </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default Profile