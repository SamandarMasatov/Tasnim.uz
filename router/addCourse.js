const express = require('express');
const router = express.Router();
const multer = require("multer");
const md5 = require("md5");
const path = require("path");
const AddCourse = require('../controller/addCourse');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads/course")
    }, 
    filename: function (req, file, cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    }
})
 
const upload = multer({ storage: storage }) 
 
router.post('/createCourse', upload.single("image"), AddCourse.createOne);
router.get("/getAll", AddCourse.getAll);
router.get("/:id", AddCourse.getOne);
router.delete('/:id', AddCourse.deleteOne);


module.exports = router;