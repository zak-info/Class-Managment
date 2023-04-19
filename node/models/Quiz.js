const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
    exam:String,
    type:String,
    mark:Number,
    question:String,
    answers:[String],
    ranswers:[String]

  });
const Quiz = mongoose.model("Quiz",QuizSchema,"questions");
module.exports =Quiz;