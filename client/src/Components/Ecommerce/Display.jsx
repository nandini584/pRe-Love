import React from 'react'
import styles from '../styles/general.module.css'
function Display(props) {
  return (
    <div className='mt-8 px-8'>
        <h1 className=' text-text_color text-4xl font-bold'>{props.heading}</h1>
        <div className='flex flex-col align-center justify-center my-16'>

        <p className='text-2xl font-semibold flex justify-center my-4'>Oops</p>
        <p className='flex justify-center text-xl'>Your {props.heading} is empty</p>
        <img src={props.src} alt="" />
        <div className='flex justify-center'>

        <button className={styles.primary_btn}>Add items</button>
        </div>
        </div>
    </div>
  )
}

export default Display