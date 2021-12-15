const mongoose = require("mongoose");

const arizaSchema = mongoose.Schema({  
  user_Id: {
    type: mongoose.Schema.ObjectId, 
    ref: "User",  
    index: true
  },
  pdf: { type: String, required: true},
  name: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});


module.exports = mongoose.model("Ariza", arizaSchema);
