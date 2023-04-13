const express=require('express');
const router=express.Router();
router.route('/')
.post(async(req,res)=>{
    try{
        const{username,password}=req.body;
        if(username=='Rahul'&&password=='Rahul@1234'){
            res.status(200).send({message:"you are the admin"})
        }else{
            res.status(404).send({error:"admin not found"});
        }
    }catch(error){
        res.status(500).send({error:"we get the error from admin routes"});
        console.log(error);
    }
})
module.exports=router;