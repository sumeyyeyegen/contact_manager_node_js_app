exports.getAllContacts = async(req,res,next) =>{
  // If we want data in json format
  // res.json({message:"Get all contacts"})
  
  res.send("Get all contacts")
    
} 

exports.createContact = async(req,res,next) =>{
  res.send("Create contact")
} 