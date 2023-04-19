const mongoose = require("mongoose");

const ExamSchema = new mongoose.Schema({
    title:String,
    startTime:String,
    endTime:String,
    level:String  

  });
const Exam = mongoose.model("Exam",ExamSchema);
module.exports =Exam;