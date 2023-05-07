import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true, "Please provide unique Username"],
        unique: [true, "Please provide unique Username"]
    },
    description: { 
        type: String,
        required: [true, "Please provide a description of the product"],
        unique : false,
    },
    ratings : {
        type : String,
        default: 0
    },
    price : { type: Number,required:[true,"Please enter a price"]},
    discount : { type: Number, default: 0},
    images: [{
        public_id :{
            type: String,
            required : true,
        },
        url : {
            type : String,
            required : true
        }
    }],
    category :{
        type : String,
        required : [true, "Please enter product category"]
    },
    Stock: {
        type: Number,
        required: [true, "Please Enter product Stock"],
        maxLength: [4, "Stock cannot exceed 4 characters"],
        default: 1,
      },
      numOfReviews: {
        type: Number,
        default: 0,
      },
    likes :{
        type: Number,
        default: 0
    },
    reviews :[{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
          },
        name : {
            type : String,
            required : true
        },
        ratings : {
            type : Number,
            required : true
        },
        comment : {
            type : String,
            required : true
        }
    }],
    user :{
        type : mongoose.Schema.ObjectId,
        ref : "User2",
        required : true
    },
    createdAt :{
        type : Date,
        default : Date.now
    }
});

export default mongoose.model.Products || mongoose.model('Product', productSchema);