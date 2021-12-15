const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const CourseSchema = mongoose.Schema({ 
  name: { type: String, required: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  lesson: { type: Number }, 
  lessontime: { type: Number }, 
  image: { type: String, required: true },
  tag: { type: String, required: true },
  date: { type: Date, default: Date.now() }, 
});


module.exports = mongoose.model("Course", CourseSchema);
