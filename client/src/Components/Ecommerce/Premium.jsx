import React from 'react'
import PremiumCard from './PremiumCard'
import Premiumdata from "../Data/Premium.json"
function Premium() {
  return (
  
    <div className='px-14  bg-gradient-to-b from-premium_up to-premium_down'>
        <h1 className=' text-white text-4xl font-bold py-10'>Premium Collection</h1>
        <div className='flex flex-wrap justify-around '>

        {Premiumdata.slice(0,4).map((value,key)=>{
        return(
            <div className='transform transition duration-500 hover:scale-110'>
            <PremiumCard title={value.title} src={value.src} price={value.price}/></div>
        )
     })}
        </div>
        
    </div>
  )
}

export default Premium