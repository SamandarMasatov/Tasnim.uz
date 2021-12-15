const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const questionSchema = mongoose.Schema({  
 
  name: { type: String, required: true}, 
  phone: { type: Number, required: true },
  message: { type: String },
  date: { type: Date, default: Date.now() },
});



module.exports = mongoose.model("Question", questionSchema);
