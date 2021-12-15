const express = require("express");
const router = express.Router();
const user = require('../controller/user')


router.post('/register', user.createOne);
router.post('/login', user.login);
router.get('/logout', user.logout)
router.get("/getall", user.getAll);  

module.exports = router;   