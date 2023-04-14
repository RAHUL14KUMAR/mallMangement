const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productt=new Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:Number
    }
})
module.exports=mongoose.model('allproducts',productt); 