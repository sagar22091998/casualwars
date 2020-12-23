// const User = require('../models/user');
// const expValidation = require("express-validator/check");
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');

exports.getLogin = async (req,res,next)=>{
  
  // const {email} = req.body;
  
  try{
    res.status = 201;
    res.json({message:"User Created",data:"asdsad"});
  }
  catch(err){
    console.log("SAdasd");
    if(!err.statusCode) {// this implies async error aaya hai 
      err.statusCode=500;
    }  
    next(err);
  }
};

exports.postRegister = async (req,res,next)=>{
  
  const { email , password } = req.body;
  
  try{
    res.status = 201;
    res.json({message:"User Created",data:"asdsad"});
  }
  catch(err){
    console.log("SAdasd");
    if(!err.statusCode) {// this implies async error aaya hai 
      err.statusCode=500;
    }  
    next(err);
  }
};
