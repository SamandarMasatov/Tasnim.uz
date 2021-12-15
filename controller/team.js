const Team = require('../models/team');
const path = require("path");
const fs = require("fs");

// Team member create 
exports.createOne = async (req, res, next) => {
    const result = new Team({
      course_Id: req.body.course_Id, 
      name: req.body.name,
      phone: req.body.phone,
      job: req.body.job,
      image: `${req.file.filename}`,
      instagram: req.body.instagram,
      facebook: req.body.facebook,
      telegram: req.body.telegram, 
      website: req.body.website,
      description: req.body.description,
    });
    result
      .save() 
      .then(() => {
        res.redirect('/adminfor/teamAll')
      })
      .catch((error) => {
        res.status(400).json({ success: error, data: error });
      });
  };
  exports.getAll = async (req, res, next) => {
    const result = await Team.find().sort({ date: -1 });
    res.json(result); 
}

  exports.updateImage = async(req, res, next) => {
    await Team.findById({ _id: req.params.id }).exec((error, data) => {
        if (error) {
            throw error
        } else {
            const filePath = path.join(
                __dirname,
                "../public/uploads/team/" + data.image
            );
            fs.unlink(filePath, async(err) => {
                if (err) throw err;
            });
        }
    });
    const result = await Team.findByIdAndUpdate({ _id: req.params.id });
    result.image = `${req.file.filename}`;
    await result
        .save()
        .then(() => {
            res.redirect("/adminfor/teamAll");
        })
        .catch((error) => {
            res.status(400).json({ success: false, data: error });
        });
};

exports.updateInfo = async(req, res, next) => {
    const result = await Team.findByIdAndUpdate({ _id: req.params.id });
    result.name = req.body.name,
    result.phone = req.body.phone,
    result.job = req.body.job,
    result.instagram = req.body.instagram,
    result.facebook = req.body.facebook,
    result.telegram = req.body.telegram,
    result.website = req.body.website,
    result.description = req.body.description,
    await result
        .save()
        .then(() => {
            res.redirect("/adminfor/teamAll");
        })
        .catch((error) => {
            res.status(400).json({ success: false, data: error });
        });
}; 

exports.getOne = async (req, res, next) => {
    const team = await Team.findById({ _id: req.params.id });
    res.render('./admin/teamPut', {
        title: "Kursni tahrirlash",
        layout: "./admin_layout",
        team
    })
} 



exports.deleteOne = async (req, res, next) => {
    await Team.findByIdAndDelete({ _id: req.params.id });
    res.redirect("/adminfor/teamAll");
};
   