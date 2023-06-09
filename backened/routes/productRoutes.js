const express=require('express');
const product=require('../Schema/Product');
const router=express.Router();
router.route('/')
.get(async(req,res)=>{
    try{
        const prod=await product.find({});
        if(prod){
            res.status(200).json({data:prod});
        }else{
            res.status(404).send({error:"we cant fetch the data"});
        }
    }catch(error){
        res.status(500).json({error:'we get the error from get product routes'})
    }
})
.post(async(req,res)=>{
    try{
        const{title,image,price,description}=req.body;
        const productDetail={
            title:title,
            image:image,
            price:price,
            description:description
        }
        const prod=await product.create(productDetail);
        if(prod){
            res.status(200).json({data:prod});
        }
    }catch(error){
        res.status(500).json({error:'we get the error from postProdutRoutes'});
        console.log(error);
    }
})
module.exports=router