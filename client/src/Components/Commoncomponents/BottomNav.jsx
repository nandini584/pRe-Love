import React from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '../Images/home.svg'
import ProfileIcon from '../Images/ProfileIcon.svg'
import WishlistIcon from '../Images/wishlistwhite.svg'
import CartIcon from '../Images/cart.svg'
import FAQsIcon from '../Images/question-circle.svg'
// import 
function BottomNav() {
  // 
  return (
    <div className='w-full h-15 bg-default_green py-6 flex flex-row justify-around fixed bottom-0 md:hidden'>
      <Link to='/ecommerce'><img src={HomeIcon} alt="Home" /></Link>

      <Link to='/profileview'> <img src={ProfileIcon} alt="Profile" /></Link>

      <Link to='/profileview/wishlist'> <img src={WishlistIcon} alt="Wishlist" /></Link>

      <Link to='/profileview/bag'><img src={CartIcon} alt="Cart" /></Link>

      <Link to='/ecommerce/faqs'><img src={FAQsIcon} alt="FAQs" /></Link>
      
    </div>
  )
}

export default BottomNav