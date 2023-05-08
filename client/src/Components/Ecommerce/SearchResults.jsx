import React, { Fragment, useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearErrors,getProduct } from '../actions/productAction'
import LoadingPage from '../Loading Page/LoadingPage'
import { Items } from '../Shop/Items';
import { useParams } from 'react-router-dom';
import Pagination from 'react-js-pagination'
import { toast } from 'react-hot-toast'
import { Slider,Typography } from '@mui/material'
const SearchResults = () => {
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
  <Fragment>
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
    </Fragment>
)
}
export default SearchResults
