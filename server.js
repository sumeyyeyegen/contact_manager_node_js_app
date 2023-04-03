const express = require("express");
const cors = require("cors")

const userRoute = require("./routes/userRoutes");
const contactRoute = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const contactControl = require("./middleware/contactControl");
//It allows to import data from .env file.
const dotenv = require("dotenv").config();

//added password to the db connection string
const DB = process.env.CONNECTION_STRING.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
//connected to Mongoose 
connectDB(DB);


//created express server
const app = express(); 


//constant port for server
const port = process.env.PORT || 3000;

//added cors permission
app.use(cors({
  origin: '*'
}));

// Without `express.json()`, `req.body` is undefined.
//middleware
//sent by the user to the server.
app.use(express.json())

//routers
//middleware 
app.use("/api/contacts",contactRoute)
app.use("/api/users",userRoute)


// middleware for errors
app.use(errorHandler)
 
//listen to the port and a callback returns.
app.listen(port, () =>{
  console.log(`Server running on port ${port}`);
}) 