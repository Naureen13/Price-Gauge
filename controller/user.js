const express=require("express");
const path=require("path")
const user= require("../models/userModel");
const jwt=require('jsonwebtoken');
const router= express.Router();


router.post("/create-user",async(req,res)=>{
    // const{name,email,password}=req.body;
     const namex = req.body.fname;
     const emailx = req.body.femail;
     const passx=req.body.fpassword;
     const userEmail=await user.findOne({emailx});
     if(userEmail){
        console.log("User Already Exists");
     }else{
        const formData = new user({
               name: namex,
               email: emailx,
               password:passx
            })  
      
      // const token= await formData.generateAuthToken();


        try {
            await formData.save();
            return res.json({message:"Signup done"})
        } catch(err) {
           return res.json({message:"uae"})
        }
     }
}) ;

router.post("/login-user",async(req,res)=>{
      const emailx = req.body.email;
      // console.log(emailx);
      const passx=req.body.password;
      // console.log(passx)
      const found=await user.findOne({email:emailx});
      if(!found){
         return res.json({message:"User doesn't exist"})
          // res.send("ERRor");
      }else{
          if(found.password==passx){
            return res.json({message:"Login Successful"})
          }else{
            return res.json({message:"Password sahi se type kro"})
          }
      }
  });    
 

module.exports=router;