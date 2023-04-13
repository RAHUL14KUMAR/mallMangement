const mongoose=require('mongoose');
const Schema=mongoose.Schema

const user=new Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true,
    },
    created_at:{
         type: Date, 
         required: true, 
         default: Date.now 
    }
})
module.exports=mongoose.model('users',user);