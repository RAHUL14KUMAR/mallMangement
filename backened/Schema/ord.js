const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const ord=new Schema({
    product:{
        type:Array,
        required:true
    }
},{
    timestamps:true
})
module.exports=mongoose.model('ords',ord);