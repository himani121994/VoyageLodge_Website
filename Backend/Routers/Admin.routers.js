const express = require('express');
const router = express.Router();
const adminCrontroller = require("../Controllers/Admin.Controller")

router.post("/uploadroom",adminCrontroller.UploadRoom);

module.exports = router;