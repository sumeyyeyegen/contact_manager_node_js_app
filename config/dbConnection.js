const mongoose = require("mongoose");

const connectDB = async(DB) =>{
  try {
    const connect = await mongoose.connect(DB);
    console.log('Database connected: ',connect.connection.host);
  } catch (error) {
    console.log('err',error);
    process.exit(1);
  }
}

module.exports = connectDB;