import React, { useEffect } from 'react';
import Searchbar from '../Commoncomponents/Searchbar'
import BottomNav from '../Commoncomponents/BottomNav';
import Hero from '../Ecommerce/Hero'
import Categories from './Categories';
import Premium from './Premium';
import Hero from './Hero.jsx';
import { clearErrors, getProduct } from '../actions/productAction';
import {useSelector, useDispatch} from 'react-redux';
import { Items } from '../Shop/Items';
import WishlistIcon from '../Images/wishlist.svg'
import LoadingPage from '../Loading Page/LoadingPage';
import toast,{ Toaster } from 'react-hot-toast';
const Home = () => {
  const dispatch = useDispatch();
  // const alert = useAlert();
  const {loading, error, products, productsCount} = useSelector(
    (state)=>state.products
  );
  useEffect(()=>{
    if(error){
      toast.error(error)
      dispatch(clearErrors())
    }
    dispatch(getProduct());
  },[dispatch,error])

  return  loading ?  (<LoadingPage/>) : (
    <div className='bg-[#F5F5F5]'>
      <Toaster position='top-center' reverseOrder={false}/>   
        <Searchbar />
        <Hero />
        <Categories/>
        <Premium />
        <i className='text-xl font-bold pt-4 text-center flex flex-row justify-center'>“Making Sustainability a  &#160;<span className='line-through'> choice </span> &#160; habit in India.”</i>
        <div className='flex flex-wrap'>
          {products && products.slice(0,6).map((value,key)=>{
            return(<Items product={value} icon={WishlistIcon}/>)
          })}
        </div>
        <BottomNav />
    </div>
    )
  }


export default Home