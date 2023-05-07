import OrderModel from "../models/order.model.js"
import Product from '../models/product.model.js'
import { Errorhandler } from '../utils/errorHandler.js'
import asyncCatch from '../middlewares/catchAsyncError.js'

export const newOrder = asyncCatch( async(req,res,next) => {
    console.log(req.body)
    const { shippingInfo, orderItems, paymentInfo, itemPrice, taxPrice, shippingPrice, discount, totalPrice } = req.body;

    const order = await OrderModel.create({shippingInfo, orderItems, paymentInfo, itemPrice, discount, taxPrice, shippingPrice, totalPrice, paidAt: Date.now(), user: req.user._id })
    res.status(201).json({
        success: true,
        order,
    });
})


//get single order
export const getSingleOrder = asyncCatch(async ( req, res, next) => {
    const order = await OrderModel.findById(req.params.id).populate(
        "user",
        "name email"
      );
    
      if (!order) {
        return next(new Errorhandler("Order not found with this Id", 404));
      }
    
      res.status(200).json({
        success: true,
        order,
      });
})

//get logged in user Orders
export const myOrders = asyncCatch( async ( req, res, next ) =>{
    const orders = await OrderModel.find({ user : req.user._id})

    res.status(200).json({
        success : true,
        orders,
    })
})

// get all Orders -- Admin
export const getAllOrders = asyncCatch(async (req, res, next) => {
    const orders = await OrderModel.find();

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalPrice;
        });
        
    res.status(200).json({
        success: true,
        totalAmount,
        orders,
    });
});

// update Order Status -- Admin
export const updateOrder = asyncCatch(async (req, res, next) => {
    const order = await OrderModel.findById(req.params.id);
  
    if (!order) {
        return next(new Errorhandler("Order not found with this Id", 404));
    }

    if (order.orderStatus === "Delivered") {
        return next(new Errorhandler("You have already delivered this order", 400));
    }

    if (req.body.status === "Shipped") {
        order.orderItems.forEach(async (o) => {
        await updateStock(o.product, o.quantity);
        });
    }
    order.orderStatus = req.body.status;
    
    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
    });
});


//update stock --- admin 
async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.Stock -= quantity;
    
    await product.save({ validateBeforeSave: false });
}

// delete Order -- Admin
export const deleteOrder = asyncCatch(async (req, res, next) => {
  const order = await OrderModel.findById(req.params.id);

  if (!order) {
      return next(new Errorhandler("Order not found with this Id", 404));
    }
    
    await OrderModel.findByIdAndDelete(req.params.id);
    
    res.status(200).json({
        success: true,
    });
});
