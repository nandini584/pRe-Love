import React from 'react'
import styles from '../styles/general.module.css'
import { useNavigate } from "react-router-dom";
function Card(props) {
  let navigate =useNavigate();
  const handleclick=()=>{
  if(props.gender == 'women')
    navigate(`/shop/female`);
    else 
    navigate(`/shop/male`);
  }
  return (

    <div className='transform transition duration-500 hover:scale-110'>
        <h1 className="relative left-0 top-[37rem] text-white text-4xl text-center">{props.title1} <br /> {props.title2}</h1>
        <div className='flex flex-col items-center relative left-0 top-[40rem]'>
        <button className={styles.secondary_btn} onClick={handleclick}>Shop Now</button>
        </div>
        <div className=''>
        <img src={props.src} alt="category" />
        </div>

    </div>


  )
}

export default Card