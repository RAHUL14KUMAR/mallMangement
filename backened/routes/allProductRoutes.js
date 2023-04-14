const express=require('express');

const product=require('../Schema/Product');
const toy=require('../Schema/ToyProduct');
const fashion=require('../Schema/FashionProduct');
const productt=require('../Schema/productt');

const router=express.Router();
router.route('/')
.get(async(req,res)=>{
    try{
        // const prod=await product.find({});
        // const Toy=await toy.find({});
        // const pro=prod.concat(Toy);
        // const Fashion=await fashion.find({});
        // const pr=pro.concat(Fashion);
        const pod=await productt.find({});
        // const p=pr.concat(pod);
        if(pod){
            res.status(200).json({data:pod})
        }else{
            res.status(404).json({error:"we dont find any product"});
        }
    }catch(error){
        res.status(500).json({error:"we gwt error from all products routes",error})
    }
})
.post(async(req,res)=>{
    try{
        const{title,image,price,description}=req.body;
        if(!title||!image||!price||!description){
            res.status(404).json({error:"we dont post any product"});
        }
        if(title=='fashion'){
            await fashion.create(req.body);
        }
        if(title=='toy'){
            await toy.create(req.body);
        }
        if(title=='electrical'){
            await product.create(req.body);
        }
        const prod=await productt.create({
            title:title,
            image:image,
            price:price,
            description:description
        })
        if(prod){
            res.status(200).json({data:prod})
        }

    }catch(error){
        res.status(500).json({error:"we gwt error from all products post routes",error})
    }
})
router.route('/:id')
.delete(async(req,res)=>{
    try{
        const  id=req.params.id;
        console.log(id);
        await productt.findByIdAndRemove(id);
        res.status(200).send("product is deleted successfully")
        
    }catch(err){
       console.log(err);
        // res.status(500).send({error:"we get the error from deletetoy product"});
    }

})

module.exports=router;