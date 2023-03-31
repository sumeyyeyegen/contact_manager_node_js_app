exports.getAllContacts = async(req,res,next) =>{
  // If we want data in json format
  // res.json({message:"Get all contacts"})
  
  res.send("Get all contacts")
    
} 

exports.createContact = async(req,res,next) =>{
  res.send("Create contact")
} 

exports.deleteContact = async(req,res,next) =>{
  res.status(201).json({message:`Delete contact for ${req.params.id}`})
} 

exports.updateContact = async(req,res,next) =>{
  res.status(204).json({message:`Update contact for ${req.params.id}`})
}

exports.getById = async(req,res,next) =>{
  res.status(201).json({message:`Get contact for ${req.params.id}`})
} 