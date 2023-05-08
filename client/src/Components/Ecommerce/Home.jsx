import React from 'react'
import Searchbar from '../Commoncomponents/Searchbar'
import BottomNav from '../Commoncomponents/BottomNav';
import Hero from '../Ecommerce/Hero'
import Categories from './Categories';
import Premium from './Premium';

function Home() {
  return (
    <div className='bg-[#F5F5F5]'>
        <Searchbar />
        <Hero />
        <Categories/>
        <Premium />
        <i className='text-xl font-bold pt-4 text-center flex flex-row justify-center'>“Making Sustainability a  &#160;<span className='line-through'> choice </span> &#160; habit in India.”</i>
        <BottomNav />
    </div>
  )
}

export default Home