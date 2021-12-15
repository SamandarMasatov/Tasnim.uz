const Ariza = require('../models/userAriza');

exports.arizaSend = async (req, res, next) => {
    const result = new Ariza({
        user_Id: req.body.user_Id,
        pdf:`${req.file.filename}`,
        name: req.body.name,
    });
    result.save()
    .then(() => { 
        res.redirect('/adminfor/sertifikat')
    })
    .catch((error) => {
        res.status(400).json({ success: error, data: error });
    })
}


// user Get all 
exports.getAll = async (req, res, next) => {
    const result = await Ariza.find().sort({ date: -1 });
    res.json(result);
  } 


  // Kursni o'chirish  
exports.deleteOne = async (req, res) => {
    await Ariza.findByIdAndDelete({ _id: req.params.id });
    res.redirect("/adminfor/sertifikat");
    // res.json("Malumot ochdi")
  };