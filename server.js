const express = require("express");
const cors = require("cors")


const contactRoute = require("./routes/contactRoutes")
//It allows to import data from .env file.
const dotenv = require("dotenv").config();

//created express server
const app = express(); 

//constant port for server
const port = process.env.PORT || 3000;

//added cors permission
app.use(cors({
  origin: '*'
}));

//routers
//middleware 
app.use("/api/contacts",contactRoute)
 
//listen to the port and a callback returns.
app.listen(port, () =>{
  console.log(`Server running on port ${port}`);
}) 