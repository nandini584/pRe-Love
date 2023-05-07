import mongoose, { mongo } from "mongoose";

export const orderSchema = new mongoose.Schema({
    shippingInfo :{
        address : {
            type: String, 
            required : [true, "Please enter an address"],
        },
        pinCode:{
            type: Number,
            required : [true, "Please enter a pin code"]
        },
        city: {
            type: String, 
            required : true
        },
        state : {
            type : String,
            required : true
        },
        country : {
            type : String, 
            required : true
        },
        mobile : {
            type : Number,
            required : true
        }
    },
    productInfo : [{
        name : {
            type : String,
            required : true
        },
        price :{
            type : String, 
            required : true
        },
        quantity : {
            type : Number,
            required : true
        },
        image :{
            type : String, 
            required : true
        },
        product :{
            type : mongoose.Schema.ObjectId,
            ref : "Product",
            required : true
        }
    }],
    user : {
        type : mongoose.Schema.ObjectId,
        ref : "User2",
        required : true
    },
    paymentInfo : {
        id : {
            type : String,
            required : true
        },
        status : {
            type : String, 
            required : true
        }
    },
    paidAt: {
        type : Date,
        required : true
    },
    itemPrice: {
        type : Number,
        default : 0
    },
    discount :{
        type: Number, 
        default: 0
    },
    taxPrice : {
        type : Number,
        default : 0
    },
    shippingPrice : {
        type : Number,
        default : 0
    },
    totalPrice : {
        type : Number,
        default: 0
    },
    orderStatus : {
        type : String,
        required : true,
        default : "Processing",
    },
    deliveredAt : Date,
    createdAt : {
        type : Date,
        default : Date.now()
    } 
});

export default mongoose.model.Orders || mongoose.model('Order', orderSchema);