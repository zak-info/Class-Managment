const mongoose = require("mongoose");

const DeviceSchema = new mongoose.Schema({
    type:String,
    name:String,
    ip:String,
    status:String
});
module.exports = mongoose.model("Device",DeviceSchema);