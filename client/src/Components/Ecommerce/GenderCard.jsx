import React from 'react'
import styles from '../styles/general.module.css'
function Card(props) {
  return (
    <div className='transform transition duration-500 hover:scale-110'>
        <h1 className="relative left-0 top-[37rem] text-white text-4xl text-center">Checkout the Exclusive <br /> {props.gender}  Collection</h1>
        <div className='flex flex-col items-center relative left-0 top-[40rem]'>
        <button className={styles.secondary_btn}>Shop Now</button>
        </div>
        <div className=''>
        <img src={props.src} alt="category" />
        </div>

    </div>


  )
}

export default Card