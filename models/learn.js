const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const learnSchema = mongoose.Schema({  
  course_Id: {
    type: mongoose.Schema.ObjectId, 
    ref: "Course", 
    index: true
  },
  name: { type: String, required: true}, 
  date: { type: Date, default: Date.now() },
});



module.exports = mongoose.model("Learn", learnSchema);
