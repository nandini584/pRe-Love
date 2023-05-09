import React from 'react'
import styles from '../../styles/general.module.css'

const Brands = (props) => {
  return (
    
    <div className='px-12 pt-20'>
    <h1 className=' text-text_color text-4xl font-bold pb-10'>{props.heading}</h1>
    <div className='transform transition duration-500 hover:scale-110 relative top-[-7rem]'>
        <h1 className="relative left-0 top-[20rem] text-white text-3xl text-center">{props.title1} <br /> {props.title2}</h1>
     <div className='flex flex-col items-center relative left-0 top-[22rem]'>
     <button className={styles.secondary_btn}>Shop Now</button>
     </div>
     <div className=''>
     <img src={props.src} alt="category" />
     </div>

 </div>
           
        
    </div>
  )
}

export default Brands