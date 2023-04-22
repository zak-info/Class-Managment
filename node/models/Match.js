const mongoose = require("mongoose");


const QAObjectSchema = new mongoose.Schema({
  q: {
    type: String,
    required: true
  },
  a: {
    type: String,
    required: true
  }
});





const MatchSchema = new mongoose.Schema({
    exam:String,
    type:String,
    mark:Number,
    question:String,
    answers:[QAObjectSchema]
    
  });
const Match = mongoose.model("Match",MatchSchema,"questions");
module.exports =Match;