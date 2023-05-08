import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

function PremiumCard(props) {
  return (
    <div className='py-8'>
        <img src={require(`../Images/${props.src}`)} alt={props.title} />
        <div className='flex flex-row items-center justify-between px-2'>
            <div className='flex flex-col pt-3' >
                <span className='text-white text-2xl'>{props.title}</span> 
                <span className='text-white text-xl'>{props.price}</span>
            </div>
            <AiOutlineHeart style={{color:"white", fontSize:'2.5rem'}} />
        </div>
    </div>
  )
}

export default PremiumCard