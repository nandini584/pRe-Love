import Product from '../models/product.model.js'
import { Errorhandler } from '../utils/errorHandler.js'
import asyncCatch from '../middlewares/catchAsyncError.js'
import ApiFeatures from '../utils/apiFeatures.js'
import cloudinary from 'cloudinary'

//To create new entries----> admin
export const createProduct =  asyncCatch(async (req, res,next)=>{ //this is what is responsible for making the products inside mongodb database
//    let images = [];

//   if (typeof req.body.images === "string") {
//     images.push(req.body.images);
//   } else {
//     images = req.body.images;
//   }

//   const imagesLinks = [];

//   for (let i = 0; i < images.length; i++) {
//     const result = await cloudinary.v2.uploader.upload(images[i], {
//       folder: "products",
//     });

//     imagesLinks.push({
//       public_id: result.public_id,
//       url: result.secure_url,
//     });
//   }

//   req.body.images = imagesLinks;
    req.body.user = req.user.id;
    
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });
})


//to get all the products
export const getAllProducts = asyncCatch(asyncCatch(async (req,res) => {

    const resultPerPage = 8;
     const productsCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage)
    const products = await apiFeature.query;
    const filteredProductsCount = products.length;

  apiFeature.pagination(resultPerPage);

    res.status(200).json({
        success : true,
        products,
        resultPerPage,
        productsCount,
        filteredProductsCount
    })
}))

// Get All Product (Admin)
export const getAdminProducts = asyncCatch(async (req, res, next) => {
  var products;
    if(req.user.role === "owner"){
      products = await Product.find();
    }
    else{
      products = await Product.find({user: req.user.id})
    }
    res.status(200).json({
      success: true,
      products,
    });
});

//update product --->admin

export const updateProduct = asyncCatch(async ( req, res, next ) => {
    let product = await Product.findById(req.params.id)
    if(!product){
        return next(new Errorhandler("Product not found",404))
    }
    if(!(product.user.toString() === req.user.id.toString() )&& !(req.user.role === "owner")){
        return next(new Errorhandler("Your are not a authroized user to make these changes",404))
    }
//     // Images Start Here
//     let images = [];
  
//     if (typeof req.body.images === "string") {
//       images.push(req.body.images);
//     } else {
//       images = req.body.images;
//     }
  
//     if (images !== undefined) {
//       // Deleting Images From Cloudinary
//       for (let i = 0; i < product.images.length; i++) {
//         await cloudinary.v2.uploader.destroy(product.images[i].public_id);
//       }
  
//       const imagesLinks = [];
  
//       for (let i = 0; i < images.length; i++) {
//         const result = await cloudinary.v2.uploader.upload(images[i], {
//           folder: "products",
//         });
  
//         imagesLinks.push({
//           public_id: result.public_id,
//           url: result.secure_url,
//         });
//       }
  
//       req.body.images = imagesLinks;
//     }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators : true,
        useFindAndModify : false
    })
    return res.status(200).json({
        success : true,
        updated_product : product
    })
 });

export const deleteProduct = asyncCatch(async ( req, res, next ) => {
    const product = await Product.findById(req.params.id)
    if(!product){
        return next(new Errorhandler("product not found", 404))
    }
    if(!(product.user.toString() === req.user.id.toString() )&& !(req.user.role === "owner")){
      return next(new Errorhandler("Your are not a authroized user to make these changes",404))
  }
//     // Deleting Images From Cloudinary
//     for (let i = 0; i < product.images.length; i++) {
//       await cloudinary.v2.uploader.destroy(product.images[i].public_id);
//     }
//*************************the older version not working ****************
    // await product.remove();
  
    // res.status(200).json({
    //   success: true,
    //   message: "Product Delete Successfully",
    // });
// ***********************************************************
    Product.findByIdAndDelete(req.params.id).then(()=>{
        return res.status(200).json({
            success : true,
            message : "product deleted successfully",
            product
        })
    }).catch(error=>{
        return next(new Errorhandler("failed to delete product", 404))
    })
})


//to get all the product details
export const getProductDetails = asyncCatch(async (req,res,next) =>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return next(new Errorhandler("Product does not exist", 404))
    }

    res.status(200).json({
        success : true,
        product
    })
})



// Create New Review or Update the review
export const createProductReview = asyncCatch(async (req, res, next) => {
  const { rating, comment, productId } = req.body;
  
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  
  const product = await Product.findById(productId);
  
  // console.log("insidie function")
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()

  );
  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
      (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }
  
  let avg = 0;
  
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  
  product.ratings = avg / product.reviews.length;
  
  await product.save({ validateBeforeSave: false });
  
  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product
export const getProductReviews = asyncCatch(async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  
  if (!product) {
    return next(new Errorhandler("Product not found", 404));
  }
  
  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});


// Delete Review
export const deleteReview = asyncCatch(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);
  if (!product) {
    return next(new Errorhandler("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => {
      // console.log(rev)
      rev._id.toString() !== req.query.id.toString()
    }
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
