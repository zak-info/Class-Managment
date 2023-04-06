const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
    userId:String,
    date:String


  });
module.exports = mongoose.model("Login",LoginSchema);