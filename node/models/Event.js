const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    title:String,
    type:String,
    des:String,
    date:String,
    status:String



  });
module.exports = mongoose.model("Event",EventSchema);