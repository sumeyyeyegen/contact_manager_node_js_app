
// @desc Get all contacts
// @route GET /api/contacts
// @access public
exports.getAllContacts = async(req,res,next) =>{
  // If we want data in json format
  // res.json({message:"Get all contacts"})
  
  res.send("Get all contacts")
    
} 

// @desc Create new contact
// @route POST /api/contacts
// @access public
exports.createContact = async(req,res,next) =>{
  res.send("Create contact")
} 


// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
exports.deleteContact = async(req,res,next) =>{
  res.status(201).json({message:`Delete contact for ${req.params.id}`})
} 


// @desc Update contact
// @route UPDATE /api/contacts/:id
// @access public
exports.updateContact = async(req,res,next) =>{
  res.status(204).json({message:`Update contact for ${req.params.id}`})
}

// @desc Get contact
// @route GET /api/contacts/:id
// @access public
exports.getById = async(req,res,next) =>{
  res.status(201).json({message:`Get contact for ${req.params.id}`})
} 