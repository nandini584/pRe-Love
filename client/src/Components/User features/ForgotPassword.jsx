import React,{useState,useEffect} from 'react'
import {Link } from 'react-router-dom'
import avatar from '../Images/person.png';
import toast,{ Toaster } from 'react-hot-toast';
import { forgotPassword } from '../actions/userActions';
import {useDispatch, useSelector} from 'react-redux'
import { clearErrors } from '../actions/userActions';

import styles from '../styles/login.module.css';
import LoadingPage from '../Loading Page/LoadingPage';

const  ForgotPassword=()=> {
  const dispatch = useDispatch();
  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );
  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
    }
  }, [dispatch, error, message]);
  return (loading?<LoadingPage/> :(
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Please enter Your email</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter the email id of your account
            </span>
          </div>

          <form className='py-1' onSubmit={forgotPasswordSubmit}>
              <div className='profile flex justify-center py-4'>
                  <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>
              <div className="textbox flex flex-col items-center gap-6">
                  <input className={styles.textbox} type="text" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)}/>
                  <button className={styles.btn} type='submit'>Let's Go</button>
                  <button className={styles.btn}><Link to='/login'>Back to login</Link> </button>
              </div>
          </form>

        </div>
      </div>
    </div>)
  )
}
export default ForgotPassword
