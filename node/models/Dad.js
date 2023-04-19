const mongoose = require("mongoose");

const DadSchema = new mongoose.Schema({
    exam:String,
    type:String,
    mark:Number,
    question:String,
    answers:[String],
    text:String
    
  });
const Dad = mongoose.model("Dad",DadSchema,"questions");
module.exports =Dad;