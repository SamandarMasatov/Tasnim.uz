const express = require("express");
const router = express.Router();
const learn = require('../controller/learn')

router.post("/add", learn.createOne);
router.get("/getAll", learn.getAll);
router.delete("/delete/:id", learn.deleteOne);


module.exports = router;
 

