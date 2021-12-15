const Course = require('../models/addCourse');
const path = require('path');
const fs = require('fs');
 
// Kurs yaratish
exports.createOne = async (req, res, next) => {
    const result = new Course({
        name: req.body.name,
        title: req.body.title,
        description: req.body.description, 
        lesson: req.body.lesson,
        lessontime: req.body.lessontime,
        image: `${req.file.filename}`,
        tag: req.body.tag,
    })
    await result
        .save()
        .then(() => {
            res.redirect("/adminfor/course")
            // res.status(200).json({ success: true, data: data });
        })
        .catch((error) => {
            res.status(400).json({ success: false, data: error });
        });
}
 
// All course get all
exports.getAll = async (req, res) => {
    const result = await Course.find().sort({date: -1});
    res.json(result); 
}
 
// Kursni o'chirish  
exports.deleteOne = async (req, res) => {
    await Course.findByIdAndDelete({ _id: req.params.id });
    res.redirect("/adminfor/course");
    // res.json("Malumot ochdi")
  };

//   Web dasturlash 
//   Sifatli, Tezkor, Zamonaviy web saytlar va online Platformalar qilishni o'rganamiz


exports.getOne = async (req, res, next) => {
    const course = await Course.findById({ _id: req.params.id });
    res.render('./admin/courseSingle', {
        title: "Tasnim Kurslari haqida",
        layout: "./admin_layout",
        course
    })
} 