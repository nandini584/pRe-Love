import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';// import { generateSlides } from '../utils';
import '@splidejs/splide/dist/css/splide.min.css';
import cart from '../shopImages/img10.jpg'
import Dustbin from '../Images/dustbin.svg'
import Bag from '../Images/bag.svg'

const Tiles=({Photo,Name,Description,Pricing,Discount,Review,ReviewCount})=>{
    const cost = Math.round(Pricing*(100-Discount)/100);
    const options ={
        type: 'loop',
        perPage : 1,
        perMove : 1,
        width : "150px",
        height : "200px",
        autoplay : true,
        interval : 5000,
        pauseOnHover : true,
        arrows : false,
        pagination : true,
        lazyLoad : "nearby" 
    }
    return(
        <>
        <div className="flex flex-col h-fit w-fit px-4 py-4">

            <Splide options={options}>
                <SplideSlide>
                    <img src={require('../shopImages/img1.jpg')} alt="dunno" className="w-[150px] h-[200px]"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={cart} alt="dunno" className="w-[150px] h-[200px]"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={cart} alt="dunno" className="w-[150px] h-[200px]"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={cart} alt="dunno" className="w-[150px] h-[200px]"/>
                </SplideSlide>
            </Splide>

            <p className="text-[1.4rem] text-[#464646] font-[700]">{Name}</p>

            <div className="flex gap-4 text-[1.2rem] text-[#6D6D6D] font-[500]">
                <span className="line-through "> Rs. {Pricing}</span>
                <span > Rs {cost}</span>
            </div>

            <p className="text-[1.2rem] text-[#A7B99D]">&#40; {Discount} % off &#41;</p>

            <div className="flex gap-2 text-[1.4rem] ">
                <button className="border-[1px] border-[#a8a8a8] px-1 rounded-[5px] shadow"><img src={Dustbin} alt="Delete" className="w-[15px]"/></button>
                <button className="rounded-[10px] w-fit p-2 flex bg-[#A7B99D] items-center text-white">
                    <img src={Bag} className="w-[15px] h-[15px]"/>
                    <p>Move to Cart</p>
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
        </>
    )
}
export {Tiles};