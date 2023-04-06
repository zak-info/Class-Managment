const mongoose = require("mongoose");

const ActionSchema = new mongoose.Schema({
    userId:String,
    actionId:String


  });
module.exports = mongoose.model("Action",ActionSchema);