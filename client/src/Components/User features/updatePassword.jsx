import React, { useEffect ,useState} from 'react'
import {useNavigate, Navigate} from "react-router-dom"
import avatar from '../Images/person.png'
import toast,{Toaster} from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/login.module.css'
import LoadingPage from '../Loading Page/LoadingPage';
import { clearErrors,updatePassword } from '../actions/userActions';
const UpdatePassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState() ;
    const [password, setPassword] = useState() ;
    const [newPassword, setNewPassword] = useState() ;
    const { error, isUpdated, loading } = useSelector((state) => state.profile);
    const oldPasswordChange=(e)=>{
        setOldPassword(e.target.value)
    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const newPasswordChange=(e)=>{
        setNewPassword(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("oldPassword", oldPassword);
        myForm.set("newPassword", password);
        myForm.set("confirmPassword", newPassword);

    dispatch(updatePassword(myForm));        
    }
    useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearErrors());
        }
    
        if (isUpdated) {
          alert.success("Profile Updated Successfully");
    
          navigate("/profileview");
    
          dispatch({
            type: "UPDATE_PASSWORD_RESET",
          });
        }
    }, [dispatch, error,  isUpdated]);
    
  return (loading ? <LoadingPage/> :(
    <>
    <div className='container m-auto font-Montserrat'>
        <Toaster position='top-center' reverseOrder={false}/>

        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass}>

                <div className="title flex flex-col items-center">
                    <h3 className="text-5xl font-bold">Enter new password</h3>
                </div>

                <form onSubmit={handleSubmit} className="py-1">
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} alt="avatar" className={styles.profile_img} />
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6'>
                        <input type="text" placeholder="Enter old password" className={styles.textbox} onChange={oldPasswordChange} required/>
                        <input type="text" placeholder="Enter new password" className={styles.textbox} onChange={passwordChange} required/>
                        <input type="password" placeholder='Re-enter new password' className={styles.textbox} onChange={newPasswordChange} required/>
                        <button type="submit" className={styles.btn}>Change Password</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    </>))
}


export default UpdatePassword


/*
import React, { useEffect ,useState} from 'react'
import {useNavigate, Navigate} from "react-router-dom"
import avatar from '../Images/person.png'
import toast,{Toaster} from 'react-hot-toast';
 
import styles from '../styles/login.module.css'
const UpdatePassword = () => {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState() ;
    const [password, setPassword] = useState() ;
    const [newPassword, setNewPassword] = useState() ;
  
    const oldPasswordChange=(e)=>{
        setOldPassword(e.target.value)
    }
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const newPasswordChange=(e)=>{
        setNewPassword(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const myForm = new FormData();

        myForm.set("oldPassword", oldPassword);
        myForm.set("newPassword", password);
        myForm.set("confirmPassword", newPassword);

    dispatch(updatePassword(myForm));        
    }
    useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearErrors());
        }
    
        if (isUpdated) {
          alert.success("Profile Updated Successfully");
    
          navigate("/profileview");
    
          dispatch({
            type: UPDATE_PASSWORD_RESET,
          });
        }
    }, [dispatch, error,  isUpdated]);
    
  return (
    <>
    <div className='container m-auto font-Montserrat'>
        <Toaster position='top-center' reverseOrder={false}/>

        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass}>

                <div className="title flex flex-col items-center">
                    <h3 className="text-5xl font-bold">Enter new password</h3>
                </div>

                <form onSubmit={handleSubmit} className="py-1">
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} alt="avatar" className={styles.profile_img} />
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6'>
                        <input type="text" placeholder="Enter old password" className={styles.textbox} onChange={oldPasswordChange} required/>
                        <input type="text" placeholder="Enter new password" className={styles.textbox} onChange={passwordChange} required/>
                        <input type="password" placeholder='Re-enter new password' className={styles.textbox} onChange={newPasswordChange} required/>
                        <button type="submit" className={styles.btn}>Change Password</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    </>
  )
}

export default UpdatePassword */