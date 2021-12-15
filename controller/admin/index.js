const Course = require('../../models/addCourse')
const Team = require('../../models/team');
const Learn = require("../../models/learn");
const Question = require("../../models/question");
const Gallery = require("../../models/gallery");
const User = require("../../models/user");
const Ariza = require("../../models/userAriza");

// Admin Index render
exports.adminIndex = async (req, res, next) => {
    res.render('./admin/index', { 
        title: "Admin panel", 
        layout: "./admin_layout"
    })
}

// Add course render
exports.addCourse = async (req, res, next) => {
    res.render('./admin/addCourse', {
        title: "Course add",
        layout: "./admin_layout",
    })
}

exports.course = async (req, res, next) => {
    const course = await Course.find().sort({ date: -1 })
    res.render('./admin/course', {
        title: "Course All",
        layout: "./admin_layout",
        course
    })
}
// team  Add
exports.team = async (req, res, next) => {
    const course = await Course.find().sort({ date: -1 })
    res.render('./admin/teamAdd', {
        title: "Kurs qo'shish",
        layout: "./admin_layout",
        course
    }) 
}
// team  Add
exports.teamAll = async (req, res, next) => {
    const team = await Team.find().sort({ date: -1 })
    res.render('./admin/teamAll', {
        title: "Kurslar",
        layout: "./admin_layout",
        team

    })
}

// team  Put
exports.teamPut = async (req, res, next) => {
    const result = await Team.findById({ _id: req.params.id })
    res.render('./admin/teamPut', {
        title: "Kurs tahrirlash",
        layout: "./admin_layout",
        result
    })
}

// learn 
exports.learn = async (req, res, next) => {
    const course = await Course.find().sort({ date: -1 });
    const learn = await Learn.find().sort({ date: -1 });
    res.render('./admin/learn', {
        title: "Nimalarni o'rganasiz",
        layout: "./admin_layout",
        course, learn

    })
}
// Question
exports.question = async (req, res, next) => {
    const message = await Question.find().sort({ date: -1 });
    res.render('./admin/question', {
        title: "Savollar",
        layout: "./admin_layout",
        message

    })
}

// Gallery
exports.gallery = async (req, res, next) => {
    const gallery = await Gallery.find().sort({ date: -1 });
    res.render('./admin/gallery', {
        title: "Gallery",
        layout: "./admin_layout",
        gallery
    })
}
// User Register List
exports.registerList = async (req, res, next) => {
    const userAll = await User.find().sort({ date: -1 });
    res.render('./admin/registerList', {
        title: "Murojatlar",
        layout: "./admin_layout",
        userAll
    })
}
// User Sertifikat
exports.sertifikat = async (req, res, next) => {    
    const userAll = await User.find().sort({ date: -1 });
    const ariza = await Ariza.find().sort({ date: -1 });
    res.render('./admin/sertifikat', {
        title: "Sertifikat",
        layout: "./admin_layout",
        userAll, ariza
    })
}
// Register Admin 
exports.register = async (req, res, next) => {
    res.render('./admin/register', { title: "Register Admin", layout: "./login"})
}

// Login Admin 
exports.login = async (req, res, next) => {
    res.render('./admin/login', { title: "Login Admin", layout: "./login"})
}

