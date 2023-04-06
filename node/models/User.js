const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },fullname:String,
    email:String,
    password:String,
    status:String
},{_id:false});
module.exports = mongoose.model("User",UserSchema);