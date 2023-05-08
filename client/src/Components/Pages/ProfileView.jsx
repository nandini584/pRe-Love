import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useFetch from './profileHook';
import styles from '../styles/login.module.css'
import avatar from '../Images/person.png'
import BottomNav from '../Commoncomponents/BottomNav';
const ProfileView = () => {
    const [{apiData}] =  useFetch();
    const navigate= useNavigate();
    function userLogout(){
        localStorage.removeItem('token');
        navigate('/login')
    }
  return (
    <>
    
    <div className='min-w-full flex flex-col items-center text-[#464646]  bg-[#e1dfdf]'>
        <div className='flex flex-col gap-[10px] py-4'>

            {/* first block */}
            <div className={styles.glass2}>
                <div className="flex flex-col items-center justify-center" >

                <p className='self-end hover:underline hover:cursor-pointer'><Link to='/profile'>Edit</Link></p>
                <img src={ apiData?.profile || avatar} alt="avatar" className={styles.profile_img} />
                 {<span className='text-[150%] font-[600] pt-4 pb-2'> {apiData?.firstName} {apiData?.lastName} </span>|| <span className='text-red-300 pt-4 pb-2'> Error loading username </span>} 
                <span> {apiData?.email || ""}</span>
                <span> {apiData?.mobile || ""}</span>
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
                    <span className='py-2 border-b-[1px] border-[#DFDFDF]'> Add Account </span>
                    <span className='py-2'> <Link to='/login' onClick={userLogout}>Logout</Link></span>
            </div>
        </div>
       

    </div>
        <BottomNav />
    
    </>
  )
}

export default ProfileView
