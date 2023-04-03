const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
// @desc Get all contacts
// @route GET /api/contacts
// @access public
exports.getAllContacts = asyncHandler(async(req,res,next) =>{
  
// Async-await is used when fetching data from database.
   const contacts = await Contact.find();

  // If we want data in json format
  // res.json({message:"Get all contacts"})
  
  res.status(200).json(contacts)
    
})

// @desc Create new contact
// @route POST /api/contacts
// @access public
exports.createContact = asyncHandler(async(req,res,next) =>{
  // await Contact.
  console.log('request body', req.body);
  const {name,email,phone} = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const contact = await Contact.create(req.body)
  res.status(201).json(contact);

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
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  const updatedContact = await Contact.findOneAndUpdate(req.params.id,req.body,{new:true})
  res.status(201).json({message:`Update contact for ${req.params.id}`,data:updatedContact})
})

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
exports.getById = asyncHandler(async(req,res,next) =>{
  const contact = await Contact.findById(req.params.id);
  console.log('contact',contact);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact)
})