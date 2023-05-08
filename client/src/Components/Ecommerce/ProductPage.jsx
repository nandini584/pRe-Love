import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getProductDetails } from '../actions/productAction';
import { useParams } from 'react-router-dom';
import toast,{ Toaster } from 'react-hot-toast';

const ProductPage = () => {
    const {id}=useParams()
    console.log(id)
    const dispatch = useDispatch();

    const {products,loading,error} = useSelector((state)=>state.productDetails)
// console.log(states.products)
    useEffect(()=>{
        if(error){
             toast.error(error)
             dispatch(clearErrors())
          }
        dispatch(getProductDetails(id))
    },[dispatch,id,error])
    const cost = Math.round(products.price*(100-products.discount)/100);
  return (
    <Fragment>
        <Toaster position='top-center' reverseOrder={false}/> 
        <div className="productImages">
            {products.images && products.images.map((value,key)=>{
                return (<div>{value.url}</div>)
            })}
        </div>
        <div className="productname">
            {products.name}
        </div>
        <div className="productdetails">
            {products.details}
        </div>
        <div className="productprice">
            {products.price}
        </div>
        <div className="productdiscount">
            {products.discount}
        </div>
        <div className="productcost">
            {cost}
        </div>
        {/* {products} */}
    </Fragment>
  )
}

export default ProductPage
