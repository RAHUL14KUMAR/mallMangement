const express=require("express");76
const ord=require("../Schema/ord");
const router=express.Router();
router.route('/ord')
.get(async(req,res)=>{
    try{
        const order=await ord.find({});
        if(order){
            res.status(200).json({data:order});
        }else{
            res.status(404).josjn({data:"we dont find any of the order"});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({error:"we get the error from order router"});
    }
})
.post(async(req,res)=>{
    try{
        const product=req.body;
        const orderDetails={
            product:product
        }
        const or=await ord.create(orderDetails);
        if(or){
            res.status(200).json({data:or});
        }else{
            res.status(404).json({error:"we cant put the order"});
        }

    }catch(error){
        console.log(error);
        res.status(500).json({error:"we get the error from order router"});
    }
})
module.exports=router;
// .post(async(req,res)=>{
//     try{
//         const or=await order.create(req.body);
//         // const ord={
//         //     order:[
//         //         {title:req.body.title,price:req.body.price,image:req.body.image,description:req.body.description}
//         //     ]
//         // }
//         // const or=order.create(ord);
//         if(or){
//             res.status(200).json({data:or});
//         }else{
//             res.status(404).json({error:"we cant put the order"});
//         }

//     }catch(error){
//         console.log(error);
//         res.status(500).json({error:"we get the error from order router"});
//     }
// })