import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Categories(props) {
  return (
    <div className='px-12 pt-4'>
        <h1 className=' text-text_color text-4xl font-bold pb-10'>Categories</h1>
        <Splide aria-label="Categories">
        <SplideSlide>
            <div className='flex flex-row justify-evenly'>
                <div className='flex flex-col items-center '>

                <img src={props.img1} alt="tops"/>
                <h1 className='text-xl text-text_color pt-2 font-regular'>{props.txt1}</h1>
                </div>
                <div className='flex flex-col items-center '>
                <img src={props.img2} alt="bottoms"/>
                <h1 className='text-xl text-text_color pt-2 font-regular'>{props.txt2}</h1>
                </div>
                <div className='flex flex-col items-center '>
                <img src={props.img3} alt="tops"/>
                <h1 className='text-xl text-text_color pt-2 font-regular'>{props.txt3}</h1>
                </div>
            </div>
        </SplideSlide>
        <SplideSlide>
        <div className='flex flex-row justify-evenly'>
        <div className='flex flex-col items-center '>
                <img src={props.img4} alt="tops"/>
                <h1 className='text-xl text-text_color pt-2 font-regular'>{props.txt4}</h1>
                </div>
        <div className='flex flex-col items-center '>
                <img src={props.img5} alt="tops"/>
                <h1 className='text-xl text-text_color pt-2 font-regular'>{props.txt5}</h1>
                </div>
                
                </div>
        </SplideSlide>
        </Splide>
    </div>
  )
}

export default Categories