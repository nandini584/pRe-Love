import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Searchbar from '../Commoncomponents/Searchbar'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styles from '../styles/general.module.css'
import BottomNav from '../Commoncomponents/BottomNav';
import CustomerReviews from '../Ecommerce/CustomerReviews';
import { useNavigate } from 'react-router-dom';
const Productdetails = (props) => {
  let navigate=useNavigate();
  const handleClick = ()=>{
navigate(`/profileView/bag`)
  }
  return (
    <div>
        <Searchbar />
    <div className=' flex flex-row justify-center'>
        <div className='absolute left-14'>

        <AiOutlineArrowLeft style={{fontSize: "2.5rem"}} />
        </div>
        <h1 className=' text-text_color text-4xl font-bold '>Details</h1>

    </div>
    <div className='px-14'>

        <Splide aria-label="Categories">
        <SplideSlide>
            {/* <img src={} alt="tops" className="pt-6"/> */}
         </SplideSlide> {/* number of images provided by owner */}
        </Splide>
        <h1 className='text-2xl font-medium py-6'>{props.producttitle}</h1>
        <h1 className='text-xl py-6 border-b-2 border-spacing-6 ]'> MRP <span className='line-through'>{props.price} </span>  <span > Rs {props.cost}</span></h1>
        <p className="text-xl text-text_color pb-1">&#40; {props.discount} % off &#41;</p>
        <div className='flex flex-row justify-around py-6 border-b-2 border-spacing-6'>
      
        <button className={styles.secondary_btn2} onClick={handleClick} >Add to bag</button>
        <button className={styles.primary_btn}>Buy Now</button>
        </div>
        <h1 className='text-2xl font-bold py-6 text-text_color'>Customer Reviews</h1>
        <CustomerReviews />
    </div>
    <i className='text-xl font-bold pt-4 text-center flex flex-row justify-center '>“Making Sustainability a  &#160;<span className='line-through'> choice </span> &#160; habit in India.”</i>
        <BottomNav />

    </div>
  )
}

export default Productdetails