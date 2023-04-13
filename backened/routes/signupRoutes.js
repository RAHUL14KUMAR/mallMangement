const express=require('express');
const router=express.Router();
const Users =require('../Schema/User')
const bcrypt=require('bcrypt');

router.route('/')
.post(async(req,res)=>{
    try{
        const{username,email,password}=req.body;
        const encrypt_password = await bcrypt.hash(password, 10);

        if(!username||!email||!password){
            return res.status(404).json({error:"put the credentials"})
        }

        const userDetail={
            username:username,
            email:email,
            password:encrypt_password
        }    
        const userExists=await Users.findOne({email:email})
        if(userExists){
            return res.status(401).send({error:'email is already in use'});
        }else{
            await Users.create(userDetail);
            return res.status(200).json({message:'user is created successfully'});
        }
    }catch(error){
        res.status(500).send({error:'get error from signup users'})
    }

})
module.exports=router;