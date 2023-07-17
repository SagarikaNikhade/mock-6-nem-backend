const express = require("express");
const {UserModel} = require("../models/user.model");
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

userRouter.post("/login",async(req,res)=>{
   const{email,password}=req.body;
   try{
    //   const user= await UserModel.findOne({email});
       if (email === 'eve.holt@reqres.in' && password === password) {
        bcrypt.compare(password,password,(err, result)=> {
            if(result){
               res.send({"msg":"Login Successfull !!","token":jwt.sign({"userID":_id}, "masai")});
            }else{
               res.send("Wrong Credentials !!");
            }
       });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
   }catch(err){
       res.send({"msg":err.message});
   }

})


module.exports={userRouter}