const mongoose = require('mongoose');


const warningShcema = new mongoose.Schema({
    protocole:String,
    discription:String,
    date:String,
    status:String
   
  
  });


module.exports =mongoose.model('Warning', warningShcema);