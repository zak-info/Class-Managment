const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },fullname:String,
    birthDay:String,
    gender:String,
    est:String,
    level:String,
    address:String,
    mobile:String,
    password:String
},{_id:false});
module.exports = mongoose.model("Student",StudentSchema);