const express=require('express');
const router=express.Router();
const Users =require('../Schema/User')

router.route('/')
.post(async(req,res)=>{
    try{
        const{email,password}=req.body;
        
        const UserDetail=await Users.find({email:email})
        if(UserDetail){
            return res.status(200).send({message:UserDetail});
        }else{
            return res.status(404).json({error:"wrongCredentials"});
        }
    }catch(error){
        return res.status(500).json({error:'we get the error from login routes'})
    }
})
module.exports=router;
