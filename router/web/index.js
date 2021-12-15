const express = require('express');
const router = express.Router()
const renderIndex = require('../../controller/web/index');

// Middleware function
const { isAuth, isAuth_Admin } = require("../../middleware/isAuth")

router.get("/", renderIndex.index);
router.get("/message", renderIndex.messageArrive);
router.get("/register", renderIndex.register); 
router.get("/login", renderIndex.login); 
router.get("/userPay/:id", renderIndex.userPay);
router.get("/userCourse/:id", renderIndex.userCourse);
router.get("/userSettings/:id", renderIndex.userSettings);
router.get("/userIdea/:id", renderIndex.userIdea);
router.get("/userSertificat/:id", renderIndex.userSertificat);
router.get("/pupilDiplom/:id", renderIndex.pupilDiplom);
router.get("/userAriza/:id", renderIndex.userAriza);
router.get("/teamSingle/:id", renderIndex.teamSingle);
router.get("/courseSingle/:id", renderIndex.courseSingle);

module.exports = router;