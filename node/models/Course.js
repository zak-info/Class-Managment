const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    title:String,
    art:String,
    path:String


  });
module.exports = mongoose.model("Course",CourseSchema);