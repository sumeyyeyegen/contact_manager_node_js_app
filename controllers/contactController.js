
// @desc Get all contacts
// @route GET /api/contacts
// @access public
const asyncHandler = require("express-async-handler");

exports.getAllContacts = asyncHandler(async(req,res,next) =>{
  // If we want data in json format
  // res.json({message:"Get all contacts"})
  
  res.send("Get all contacts")
    
})

// @desc Create new contact
// @route POST /api/contacts
// @access public
exports.createContact = asyncHandler(async(req,res,next) =>{
  console.log('request body', req.body);
  const {name,email,phone} = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  res.status(201).json({message:"Create contact"})

})


// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
exports.deleteContact = asyncHandler(async(req,res,next) =>{
  res.status(201).json({message:`Delete contact for ${req.params.id}`})
})


// @desc Update contact
// @route UPDATE /api/contacts/:id
// @access public
exports.updateContact = asyncHandler(async(req,res,next) =>{
  res.status(204).json({message:`Update contact for ${req.params.id}`})
})

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
exports.getById = asyncHandler(async(req,res,next) =>{
  res.status(201).json({message:`Get contact for ${req.params.id}`})
})