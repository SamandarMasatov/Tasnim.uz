const Question = require("../models/question")

exports.message = async (req, res, next) => {
    const result = new Question({
      name: req.body.name,
      phone: req.body.phone,
      message: req.body.message,
    });
    result
      .save() 
      .then(() => { 
        // res.status(400).json({ success: true, data: data });
        res.redirect('/message')
      })
  }; 