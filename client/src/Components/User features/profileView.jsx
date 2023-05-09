import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/login.module.css'
import { useDispatch } from 'react-redux';
import toast,{Toaster} from 'react-hot-toast';
import avatarIcon from '../Images/person.png'
import BottomNav from '../Commoncomponents/BottomNav';
import { useSelector } from 'react-redux';
import { clearErrors,logout } from '../actions/userActions';
import LoadingPage from '../Loading Page/LoadingPage';
const ProfileView = () => {
    const dispatch = useDispatch()
    const {loading,error,user} = useSelector((state)=>state.user)
    const {name,avatar,email,role,mobile,address} = useSelector((state)=>state.user.user)
    function userLogout(){  
        dispatch(logout())
    }
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearErrors())
        }
    },[error,loading,user])
  return (loading ? <LoadingPage/> :(<><div className='min-w-full flex flex-col items-center text-[#464646]  bg-[#e1dfdf]'>
        <Toaster position='top-center' reverseOrder={false}/>
        <div className='flex flex-col gap-[10px] py-4'>
        {(role === "owner" || role === "admin") ?( <div className={styles.glass2}>
                    <span className='py-2 border-b-[1px] border-[#DFDFDF]'> <Link to='/admindashboard'>Admin</Link> </span>
            </div>) : (<></>)

        }
            {/* first block */}
            <div className={styles.glass2}>
                <div className="flex flex-col items-center justify-center" >

                <p className='self-end hover:underline hover:cursor-pointer'><Link to='/profile/update'>Edit</Link></p>
                <img src={ avatar.url || avatarIcon} alt="avatar" className={styles.profile_img} />
                <span className='text-[150%] font-[600] pt-4 pb-2'> {name} </span> 
                <span> {email}</span>
                <span> {mobile ||""}</span>
                <span> {address ||""}</span>
                </div>
            </div>
            {/* second block */}
            <div className={styles.glass2}>
                    <span className='font-[600] py-2 text-[110%]'>  Orders  </span>
                    <span className='py-2 border-b-[1px] border-[#DFDFDF]'><Link to='/profileView/wishlist'> Wishlist </Link> </span>
                    <span className='py-2 border-b-[1px] border-[#DFDFDF]'> <Link to='/profileView/bag'>Bag</Link> </span>
                    <span className='py-2'> Order Tracking & confirmation </span>
            </div>

            {/* third block */}

            <div className={styles.glass2}>
                    <span className='font-[600] py-2 text-[110%]'> Customer Care </span>
                    <span className='py-2 border-b-[1px] border-[#DFDFDF]'> <Link to='/ecommerce/termsofuse'>Terms of use</Link>  </span>
                    <span className='py-2 border-b-[1px] border-[#DFDFDF]'> <Link to='/ecommerce/faqs'>FAQs</Link> </span>
                    <span className='py-2'><Link to='/ecommerce/privacypolicy'>Privacy Policy</Link>  </span>
            </div>

            {/* fourth block */}
            <div className={styles.glass2}>
                    <span className='font-[600] py-2 text-[110%]'>  Account Details </span>
                    <span className='py-2 border-b-[1px] border-[#DFDFDF]'><Link to='/password/update'>Change Password</Link></span>
                    <span className='py-2'> <Link to='/logoutsuccessful' onClick={userLogout}>Logout</Link></span>
            </div>
        </div>
       

    </div>
        <BottomNav /></>))
}
export default ProfileView
