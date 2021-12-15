const express = require("express");
const router = express.Router();
const question = require('../controller/question')

router.post("/add", question.message); 


module.exports = router;
 

