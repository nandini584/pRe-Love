import React from 'react'
import Display from '../Ecommerce/Display'
import BottomNav from '../Commoncomponents/BottomNav'
import Searchbar from '../Commoncomponents/Searchbar'
import EmptyBag from '../Images/emptybag.svg'
function Bag() {
  return (
    <div>
        <Searchbar/>
        <Display heading="Bag" src={EmptyBag}/>
        <BottomNav/>
    </div>
  )
}

export default Bag