import React, { Fragment, useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearErrors,getProduct } from '../../actions/productAction'
import LoadingPage from '../../Loading Page/LoadingPage'
import { Items } from '../../Shop/Items';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination'
import { toast } from 'react-hot-toast'
import { Slider,Typography } from '@mui/material'
import Searchbar from "../../Commoncomponents/Searchbar"
import BottomNav from '../../Commoncomponents/BottomNav';
import Categories from './Categories';
import GenderCard from '../../Ecommerce/GenderCard'
import Women from '../../Images/female.svg'
import Brands from '../Genderpage/Brands'
import Brand from "../../Images/brandsimg.svg"
import Deals from "../../Images/deals.svg"
import Tops from '../../Images/tops.svg'
import Bottoms from '../../Images/pants.svg'
import Shoes from '../../Images/shoes.svg'
import Accessories from '../../Images/accessories.svg'
import Premium from '../../Images/premiumfemale.svg'
const Female = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {keyword} = useParams();
    const [price, setPrice] = useState([0,25000]);
    const dispatch = useDispatch();
    const setCurrentPageNo = (e) =>{
        setCurrentPage(e);

    }
    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
      };
    const {products,loading,error,productsCount,resultPerPage,filteredProductsCount} = useSelector((state)=>state.products)
    useEffect(()=>{
        if(error){
            toast.error(error)
        }
        dispatch(getProduct(keyword,currentPage))
    },[dispatch,keyword,error,currentPage])

  return (
    <>
    
  {/* <Fragment>
    {loading ? <LoadingPage/>:
    <>
        <Fragment>
            {products.map((value,key)=>{
                return (<div>{value.name}</div>)
            })}
        </Fragment>
            <div className="paginationComponent">
                <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                firstPageText="1st"
                lastPageText="last"
                nextPageText="next"
                prevPageText="prev"
                itemClass='page-item'
                linkClass='page-link'
                activeClass='pageItemsActive'
                activeLinkClass='pageLinkActive'
                />
            </div><Typography>
                price
            </Typography>
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="on"
              aria-labelledby="range-slider"
              min={0}
              max={25000}
            />
        </>
    } 
    </Fragment> */}
   <Searchbar />
   <Categories img1={Tops} txt1="Tops" img2={Bottoms} txt2="Bottoms" img3={Shoes} txt3="Shoes" img4={Accessories} txt4="Accessories" img5={Premium} txt5="Premium" />
   <div className='flex flex-row justify-center'>
   <GenderCard  title1="The Latest Collection of" title2="Trending Tops" src={Women} />
   </div>
   <div className=' flex flex-col flex-warp items-center md:flex-row md:justify-center'>
   <Brands heading="Top Brands" title1="Amazing additions from" title2="Top Brands" src={Brand}  />

   <div className='relative top-[-7rem] md:top-0'>
   <Brands heading="Deals of the Day" title1="T-Shirts starting at just" title2="Rs. 129" src={Deals}  />
   </div>
   </div>
 
   <BottomNav />
    </>
)
}
export default Female