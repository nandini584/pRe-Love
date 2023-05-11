import React from 'react'
import Card from './GenderCard'
import Women from '../Images/ecom_wmn.svg'
import Men from '../Images/ecom_mn.svg'

function Categories() {

  return (
    <div className='px-14'>
        <h1 className=' text-text_color text-4xl font-bold pt-4'>Categories</h1>
        <div className=' flex flex-col flex-warp items-center md:flex-row md:justify-center'>
            <div className='px-0 md:px-6 relative top-[-5rem]'>
          <Card gender="women" title1="Checkout the Exclusive" title2=" Women Collection Now" src={Women} />
            </div>
            
            <div className='px-0 md:px-6 relative top-[-10rem] md:top-[-5rem]'>

          <Card gender="men" title1='Checkout the Exclusive' title2="Men Collection Now" src={Men}/>
            </div>
        </div>
    </div>
  )
}

export default Categories