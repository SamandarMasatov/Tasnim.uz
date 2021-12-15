const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const gallerySchema = mongoose.Schema({ 
  image: { type: String, required: true}, 
  date: { type: Date, default: Date.now() },
});



module.exports = mongoose.model("Gallery", gallerySchema);
