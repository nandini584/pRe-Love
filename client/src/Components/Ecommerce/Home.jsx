import React from 'react'
import Searchbar from '../Commoncomponents/Searchbar'
import BottomNav from '../Commoncomponents/BottomNav';
import Hero from '../Ecommerce/Hero'
function Home() {
  return (
    <div className='bg-[#F5F5F5]'>
        <Searchbar />
        <Hero />
        <BottomNav />
    </div>
  )
}

export default Home