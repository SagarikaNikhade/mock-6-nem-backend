const express = require("express");
const { BoardModel } = require("../models/board.model");
const boardRouter = express.Router();

boardRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try{
       await BoardModel.insertMany(payload);
       res.send("Data is added");
    }catch(err){
       res.send({"msg":err.message});
    }
})

module.exports = { boardRouter }