const express = require('express');
const router = express.Router();
const multer = require("multer");
const md5 = require("md5");
const path = require("path");
const ariza = require('../controller/ariza');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads/sertificat")
    }, 
    filename: function (req, file, cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    }
})
  
const upload = multer({ storage: storage }) 

router.post('/add', upload.single('pdf'), ariza.arizaSend);
router.get("/getAll", ariza.getAll);
router.delete("/delete/:id", ariza.deleteOne);




module.exports = router; 