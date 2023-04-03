const expressAsyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

const contactControl = expressAsyncHandler(async(req,res,next) =>{
  console.log('req.params.id',req.params.id);
  const contact = await Contact.findById(req.params.id);
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }
  req.contact = contact;
  next();
})

module.exports = contactControl