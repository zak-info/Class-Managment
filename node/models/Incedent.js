const mongoose = require('mongoose');


const incedentShcema = new mongoose.Schema({
    protocol:String,
    description:String,
    date:{
      year:String,
      month:String,
      time:String
    },
    status:String
   
  
  });


module.exports =mongoose.model('Incedent', incedentShcema);