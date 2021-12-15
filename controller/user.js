const User = require("../models/user");

// User create 
exports.createOne = async (req, res, next) => {
    const result = new User({
      name: req.body.name,
      phone: req.body.phone,
      password: req.body.password,
      role: req.body.role,
      courseTime: req.body.courseTime
    }); 
    result
      .save() 
      .then(() => {
        res.redirect('/')
      })
      .catch((error) => {
        res.status(400).json({ success: error, data: error });
      });
  };
 
// user Get all 
exports.getAll = async (req, res, next) => {
  const result = await User.find({ role:  'user'  })
  res.json(result);
} 

// User login 
exports.login = async (req, res, next) => {
  const { phone, password } = req.body;
  if (!phone || !password) {
    res.redirect("/");
  }
  const users = await User.findOne({ phone: phone }).select("password");
  if (!users) {
    res.redirect("/");
  }
  const isMatch = await users.matchPassword(password);
  if (!isMatch) {
    res.redirect("/");
  }

  const body = await User.findOne({ phone: req.body.phone });
  await body.save({ validateBeforeSave: false })
  req.session.client = body
  // req.session.isAuth = true;
  req.session.save()
  res.redirect('/') 
};

// User Logout
exports.logout = async (req, res, next) => {
  req.session.destroy();
  res.clearCookie("connect.sid");
  res.redirect("/");
};