const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const ord=new Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true,
    } ,
    description:{
        type:String,
        required:true
    }
})
const order=new Schema({
    order:[ord]
})

module.exports=mongoose.model('orders',order);