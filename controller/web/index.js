const Course = require('../../models/addCourse');
const Team = require("../../models/team");
const Gallery = require("../../models/gallery")

exports.index = async (req, res) => {
    const course = await Course.find().sort({ date: -1 });
    const team = await Team.find().sort({ date: -1 });
    const gallery = await Gallery.find().sort({ date: -1 });
    const user = req.session.client
    res.render("./web/index", { 
        title: "Tasnim Texnologiya Akademyasi", 
        layout: "./layout",
         user, course, team, gallery
    })
}

exports.userPay = async (req, res) => {
    const course = await Course.findById({ _id: req.params.id });
    const user = req.session.client
    res.render("./web/userPay", { 
        title: "Sizning profilingiz", 
        layout: "./userLayout",
        user, course
    })
}
exports.userCourse = async (req, res) => {
    const course = await Course.find().sort({ date: -1 });
    const user = req.session.client
    res.render("./web/userCourse", { 
        title: "Sizning Kurslaringiz", 
        layout: "./userLayout",
        user, course
    })
}
exports.userSettings = async (req, res) => {
    const course = await Course.find().sort({ date: -1 });
    const user = req.session.client
    res.render("./web/userSettings", { 
        title: "Sizning Sozlanmalaringiz", 
        layout: "./userLayout",
        user, course
    })
}

exports.userIdea = async (req, res) => {
    const course = await Course.find().sort({ date: -1 });
    const user = req.session.client
    res.render("./web/userIdea", { 
        title: "Sizning Fikringiz", 
        layout: "./userLayout",
        user, course
    })
}

exports.userSertificat = async (req, res) => {
    const course = await Course.find().sort({ date: -1 });
    const user = req.session.client
    res.render("./web/userSertifikat", { 
        title: "Sizning sertifikatingiz", 
        layout: "./userLayout",
        user, course
    })
}
exports.pupilDiplom = async (req, res) => {
    const course = await Course.find().sort({ date: -1 });
    const user = req.session.client
    res.render("./web/pupildiplom", { 
        title: "Tasnim Texnologiya Akademiyasi bitiruvchisini Sertifikati", 
        layout: "./sertifikat_layout",
        user, course
    })
}

exports.userAriza = async (req, res) => {
    const course = await Course.find().sort({ date: -1 });
    const user = req.session.client
    res.render("./web/userAriza", { 
        title: "Sizning Arizanggiz", 
        layout: "./userLayout",
        user, course
    })
}

exports.teamSingle = async (req, res) => {
    const user = req.session.client
    res.render("./web/teamSingle", { 
        title: "Tasnim Jamoa", 
        layout: "./layout",
        user,
    })
}
 
exports.courseSingle = async (req, res) => {
    const user = req.session.client
    res.render("./web/courseSingle", { 
        title: "Kurs haqida", 
        layout: "./layout",
        user,
    })
}
exports.messageArrive = async (req, res) => {
    const user = req.session.client
    res.render("./web/messageArrive", { 
        title: "Tasnim Texnologiya Akademiyasi", 
        layout: "./layout",
        user,
    })
}

exports.register = async (req, res) => {
    const user = req.session.client
    res.render("./web/register", { 
        title: "Ro'yhatdan o'tish", 
        layout: "./layout",
        user,
    })
}

exports.login = async (req, res) => {
    const user = req.session.client
    res.render("./web/login", { 
        title: "Profilga kirish", 
        layout: "./layout",
        user,
    })
}

