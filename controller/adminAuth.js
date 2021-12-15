const User = require("../models/user");

// Admin create 
exports.createOne = async (req, res, next) => {
    const result = new User({
      name: req.body.name,
      phone: req.body.phone,
      password: req.body.password,
      role: req.body.role
    });
    result
      .save() 
      .then((data) => {
        res.status(200).json({ success: true, data: data });
      })
      .catch((error) => {
        res.status(400).json({ success: error, data: error });
      });
  };

// Admin Get all 
exports.getAll = async (req, res, next) => {
  const result = await User.find({ role:  'admin'  })
  res.json(result);
} 
exports.getAllUser = async (req, res, next) => {
  const result = await User.find({ role:  'user'  })
  res.json(result);
} 

// admin login
exports.login = async (req, res, next) => {
    const { phone, password } = req.body;
    if (!phone || !password) {
      res.redirect("/adminfor/login");
    }
    const users = await User.findOne({ phone: phone }).select("password");
    if (!users) {
      res.redirect("/adminfor/login");
    }
    const isMatch = await users.matchPassword(password);
    if (!isMatch) {
      res.redirect("/adminfor/login");
    }
  
    const body = await User.findOne({ phone: req.body.phone });
    if (body.role == "user") {
      res.redirect("/adminfor/login");
      req.session.isAuth = false;
    } else if (body.role == "admin" || body.role == "moderator") {
      req.session.user = body;
      req.session.isAuth = true;
      req.session.save();
      res.redirect("/adminfor/dashboard");
    }
  };

  // User Logout
exports.logout = async (req, res, next) => {
  req.session.destroy();
  res.clearCookie("connect.sid");
  res.redirect("/adminfor/login");
};