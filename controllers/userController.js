const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

// @desc Login user
// @route POST /api/users/login
// @access public
exports.login = asyncHandler(async(req,res,next) =>{
  const {email,password} = req.body;
  if(!email || !password){
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const user = await User.findOne({email})
  if(user 
    // && (await bcrypt.compare(password,user.password))
    ){
    const accessToken = jwt.sign({
      user:{
        username:user.username,
        email:user.email,
        id:user.id
      }
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:"1m"})
    res.status(200).json(responseData(200,"Success",{_id:user._id,email:user.email,accessToken}))
  }else{
    res.status(401);
    throw new Error("email or password is not valid");
  }
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
  const user = await User.create(req.body);
  if(user){
    res.status(201).json(responseData(201,"Registered user",{_id:user._id,email:user.email}))
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