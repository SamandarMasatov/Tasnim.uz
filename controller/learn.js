const Learn = require("../models/learn");

exports.createOne = async (req, res, next) => {
    const result = new Learn({
      course_Id: req.body.course_Id, 
      name: req.body.name
    });
    result
      .save() 
      .then((data) => { 
        // res.status(400).json({ success: true, data: data });
        res.redirect('/adminfor/learn')
      })
      .catch((error) => {
        res.status(400).json({ success: error, data: error });
      });
  }; 


exports.getAll = async (req, res, next) => {
   const result = await Learn.find().sort({ date: -1 });
   res.json(result);
}


//  Delete 

exports.deleteOne = async (req, res, next) => {
  await Learn.findByIdAndDelete({ _id: req.params.id });
  res.redirect("/adminfor/learn");
};