const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const TeamSchema = mongoose.Schema({  
  course_Id: {
    type: mongoose.Schema.ObjectId, 
    ref: "Team", 
    index: true
  },
  name: { type: String, required: true}, 
  phone: { type: Number, unique: true },
  job: { type: String, required: true },   
  image: { type: String },
  instagram: { type: String },
  facebook: { type: String },
  telegram: { type: String },
  website: { type: String },
  description: { type: String },
  date: { type: Date, default: Date.now() },
});



module.exports = mongoose.model("Team", TeamSchema);
