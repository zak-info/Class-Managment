const mongoose = require("mongoose");

const ArtSchema = new mongoose.Schema({
    art:String,
    des:String



  });
module.exports = mongoose.model("Art",ArtSchema);