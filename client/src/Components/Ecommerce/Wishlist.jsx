import React from 'react'
import BottomNav from '../Commoncomponents/BottomNav'
import Searchbar from '../Commoncomponents/Searchbar'
import Display from '../Ecommerce/Display'
import EmptyWishlist from '../Images/emptywishlist.svg'
function Wishlist() {
  return (
    <div>
        <Searchbar />
        <Display heading='Wishlist' src={EmptyWishlist}/>
        <BottomNav />
    </div>
  )
}

export default Wishlist