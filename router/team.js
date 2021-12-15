const express = require("express");
const router = express.Router();
const multer = require("multer");
const md5 = require("md5");
const path = require("path");
const team = require('../controller/team')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads/team")
    },
    filename: function (req, file, cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    }
})
 
const upload = multer({ storage: storage })

router.post('/create',upload.single("image"), team.createOne);
router.get('/getAll', team.getAll);
router.put('/image/:id',upload.single("image"), team.updateImage);
router.put('/info/:id', team.updateInfo);
router.get('/:id', team.getOne);
router.delete('/delete/:id', team.deleteOne);

module.exports = router;  