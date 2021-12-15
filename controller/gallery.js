const Gallery = require("../models/gallery")

exports.createOne = async (req, res, next) => {
    const result = new Gallery({
        image: `${req.file.filename}`
    })
    result.save()
    .then(() => {
        res.redirect("/adminfor/gallery")
    })
    .catch((error) => {
        res.status(400).json({ success: false, data: error });
    })
}

// Gallery o'chirish 
exports.deleteOne = async (req, res) => {
    await Gallery.findByIdAndDelete({ _id: req.params.id });
    res.redirect("/adminfor/Gallery");
    // res.json("Malumot ochdi")
  };
