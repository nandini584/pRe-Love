// import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';// import { generateSlides } from '../utils';
import '@splidejs/splide/dist/css/splide.min.css';
import cart from '../shopImages/img10.jpg';
import Bag from '../Images/bag.svg';
import { Link } from 'react-router-dom';
import styles from '../styles/general.module.css'
const Items=({icon, product})=>{
    const cost = Math.round(product.price*(100-product.discount)/100);
    const options ={
        type: 'loop',
        perPage : 1,
        perMove : 1,
        width : "150px",
        height : "200px",
        autoplay : false,
        // interval : 5000,
        // pauseOnHover : true,
        arrows : false,
        pagination : true,
        lazyLoad : "nearby"
    }
    return(
        <>
        <Link to={`/product/${product._id}`}>
        <div className="flex flex-col h-fit w-fit px-4 py-4 rounded-lg">
            <Splide options={options}>
                <SplideSlide>
                    <img src={cart} alt="dunno" className="w-[150px] h-[200px] rounded-lg my-4"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={cart} alt="dunno" className="w-[150px] h-[200px] rounded-lg my-4"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={cart} alt="dunno" className="w-[150px] h-[200px] rounded-lg my-4"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={cart} alt="dunno" className="w-[150px] h-[200px] rounded-lg my-4"/>
                </SplideSlide>
            </Splide>

            <p className="text-xl text-text_color font-bold">{product.name}</p>

            <div className="flex gap-4 text-xl text-[#6D6D6D] font-[500]">
                <span className="line-through "> Rs. {product.price}</span>
                <span > Rs {cost}</span>
            </div>

            <p className="text-xl text-[#A7B99D] pb-1">&#40; {product.discount} % off &#41;</p>

            <div className="flex gap-3 text-xl ">
                <button className=" px-1 "><img src={icon} alt="Delete" className="w-[15px]"/></button>
                
                    
                   
                    <button className={styles.primary_btn2} > 
                    <div className='flex flex-row justify-between'>

                    <img src={Bag} alt='bag' className="w-[17px] h-[17px]"/> 
                    <span>Add to Cart</span>
                    </div>
                     </button>
                
            </div>

        </div>
            {/* <Splide options={options}>
                <SplideSlide>
                    <img src={cart} alt="dunno" />
                </SplideSlide>
                <SplideSlide>
                    <img src={cart} alt="dunno" />
                </SplideSlide>
                <SplideSlide>
                    <img src={cart} alt="dunno" />
                </SplideSlide>
                <SplideSlide>
                    <img src={cart} alt="dunno" />
                </SplideSlide>
            </Splide> */}
            </Link>
        </>
    )
}
export {Items};