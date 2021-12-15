const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({ 
  name: { type: String, required: true},
  email: { type: Number, unique: true },
  password: { type: String }, 
  role: {  
    type: String,
    enum: ["admin", "moderator", "user"],
    default: "user",
  },
  image: { type: String },
  date: { type: Date, default: Date.now() },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model("User", UserSchema);
