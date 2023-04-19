const mongoose = require("mongoose");

const MatchSchema = new mongoose.Schema({
    exam:String,
    type:String,
    mark:Number,
    question:String,
    answers:[String]
    
  });
const Match = mongoose.model("Match",MatchSchema,"questions");
module.exports =Match;