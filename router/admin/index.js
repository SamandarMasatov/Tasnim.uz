const express = require('express')
const router = express.Router();
const admin = require('../../controller/admin/index');

const { isAuth, isAuth_Admin } = require("../../middleware/isAuth")

router.get('/dashboard', isAuth_Admin, admin.adminIndex);
router.get('/addCourse', admin.addCourse);
router.get('/course', admin.course);
router.get('/team', admin.team);
router.get('/teamAll', admin.teamAll);
router.get('/learn', admin.learn);
router.get('/question', admin.question);
router.get('/gallery', admin.gallery);
router.get('/teamPut/:id', admin.teamPut); 
router.get('/registerList', admin.registerList);
router.get('/sertifikat', admin.sertifikat);
router.get('/register', admin.register);
router.get('/login', admin.login);

module.exports = router;