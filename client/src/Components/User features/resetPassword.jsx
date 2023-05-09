import React, { useEffect ,useState} from 'react'
import {useNavigate} from "react-router-dom"
import toast,{Toaster} from 'react-hot-toast';
import avatar from '../Images/person.png'
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import styles from '../styles/login.module.css'
import { resetPassword ,clearErrors} from '../actions/userActions';
import LoadingPage from '../Loading Page/LoadingPage';

const ResetPassword = () => {
    const token = useParams();
    const dispatch = useDispatch();
    const { error, success, loading } = useSelector(
        (state) => state.forgotPassword
      );
    const navigate = useNavigate();
    const [password, setPassword] = useState() ;
    const [confirmPassword, setConfirmPassword] = useState() ;
    const resetPasswordSubmit = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("password", password);
        myForm.set("confirmPassword", confirmPassword);
    
        dispatch(resetPassword(token, myForm));
      };
    const passwordChange=(e)=>{
        setPassword(e.target.value)
    }
    const confirmPasswordChange=(e)=>{
        setConfirmPassword(e.target.value)
    }
    useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearErrors());
        }
    
        if (success) {
          toast.success("Password Updated Successfully");
    
          navigate("/login");
        }
      }, [dispatch, error, navigate,success]);


  return ( loading?<LoadingPage/> :(
    <>
    <div className='container m-auto font-Montserrat'>
    <Toaster position='top-center' reverseOrder={false}/>
        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass}>

                <div className="title flex flex-col items-center">
                    <h3 className="text-5xl font-bold">Enter new password</h3>
                </div>

                <form onSubmit={resetPasswordSubmit} className="py-1">
                    <div className='profile flex justify-center py-4'>
                        <img src={avatar} alt="avatar" className={styles.profile_img} />
                    </div>
                    
                    <div className='textbox flex flex-col items-center gap-6'>
                        <input type="text" placeholder="Enter new password" className={styles.textbox} onChange={passwordChange} required/>
                        <input type="password" placeholder='Re-enter new password' className={styles.textbox} onChange={confirmPasswordChange} required/>
                        <button type="submit" className={styles.btn}>Change Password</button>
                        <button type="submit" className={styles.btn}>Change Password</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    </>)
  )
}

export default ResetPassword