const express = require('express');
const router = express.Router();
const adminAuth = require('../controller/adminAuth');

 
router.post("/createAdmin", adminAuth.createOne);
router.post("/loginAdmin", adminAuth.login);
router.get("/logout", adminAuth.logout);
router.get("/adminAll", adminAuth.getAll);
router.get("/userAll", adminAuth.getAllUser);

module.exports = router;