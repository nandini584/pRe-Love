import React, { useState, useEffect } from 'react'
import {Link,useNavigate} from "react-router-dom"
import toast,{Toaster} from 'react-hot-toast';
import styles from '../styles/login.module.css'
import convertToBase64 from '../Pages/convert';
import {clearErrors, updateProfile,loadUser } from '../actions/userActions';
import LoadingPage from '../Loading Page/LoadingPage';
import { useSelector,useDispatch } from 'react-redux';
const ProfileUpdate = () => {
    const navigate = useNavigate()
    const { user} = useSelector((state)=>state.user)
    const { error, isUpdated, loading } = useSelector((state) => state.profile);
    const {avatar} = useSelector((state)=>state.user.user)
    console.log(avatar)
    const [updateForm , setUpdateForm ] = useState({
        name: user.name,
        address: user.address || '',
        mobile :user.mobile || ''
    });
    const dispatch = useDispatch()
    const [newAvatar, setNewAvatar]= useState();
    const {name, address, mobile}= updateForm;

    const updateChange = async (e) => {
        if(e.target.name=='avatar'){
            const base64 = await convertToBase64(e.target.files[0]) ;
        setNewAvatar(base64);

        }else{
        setUpdateForm({...updateForm,[e.target.name]:e.target.value})
        console.log(updateForm)
        }
    }
    const updateSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.set('name',name);
        form.set('mobile',mobile);
        form.set('address',address);
        if(newAvatar){
            form.set('avatar',newAvatar)
        }
        dispatch(updateProfile(form))
    }
    useEffect(()=>{
      
          if (error) {
            toast.error(error);
            dispatch(clearErrors());
          }
      
          if (isUpdated) {
            toast.success("Profile Updated Successfully");
            dispatch(loadUser());
            navigate("/profileview");

            dispatch({
              type: "UPDATE_PROFILE_RESET",
            });
          }
    },[dispatch,error, isUpdated,loading,user]) 
  return (loading ? <LoadingPage/> :   (
    <>
    <div className='container m-auto font-Montserrat'>
        <Toaster position='top-center' reverseOrder={false}/>

        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass}>

                <div className="title flex flex-col items-center">
                    <h3 className="text-5xl font-bold">Update profile</h3>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Enter the details below
                    </span>
                </div>

                <form onSubmit={updateSubmit} className="py-1">
                    <div className='profile flex justify-center py-4'>
                        <label htmlFor="profile">
                            <img src={avatar.url} alt="avatar" className={styles.profile_img} />
                        </label>
                        <input type="file" name="avatar" id='profile' onChange={updateChange}/>
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6 '>

                        <div className="flex flex-col gap-6 w-[30vw] min-w-[300px] items-center">
                            <input type="text" placeholder="First Name" className={styles.textbox} value={name} name="name" onChange={updateChange} required/>
                            <input type="text" className={styles.textbox} placeholder='Enter your address' value={address} name="address" onChange={updateChange} required/>
                            <input type="text" className={styles.textbox} placeholder='Enter your Mobile number' value={mobile} name="mobile" onChange={updateChange} required/>
                        </div>
                        
                        <button type="submit" className={styles.btn}> Update Now </button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    </>)
  )
}

export default ProfileUpdate