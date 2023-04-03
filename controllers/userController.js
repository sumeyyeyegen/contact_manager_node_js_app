const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc Login user
// @route POST /api/users/login
// @access public
exports.login = asyncHandler(async(req,res,next) =>{
  res.status(200).json(req.contact)
})

// @desc Register user
// @route POST /api/users/register
// @access public
exports.register = asyncHandler(async(req,res,next) =>{
  const {username,email,password}= req.body;
  if(!username || !email || !password){
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const userAvailable = await User.findOne({email});
  console.log('userAvailable',userAvailable);
  if(userAvailable){
    res.status(400);
    throw new Error("User already registered!")
  }
  const user = User.create(req.body);
  if(user){
    res.status(201).json({message:"Registered user",data:user})
  }
  else{
    res.status(400);
    throw new Error("User data is not valid");
  }
})

// @desc user info
// @route GET /api/users/:id
// @access private
exports.userInfo = asyncHandler(async(req,res,next) =>{
  res.status(200).json({message:"User info"})
})