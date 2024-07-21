const express = require('express');
const { UploadRoom } = require('../Controllers/Admin.Controller');
const router = express.Router();

router.post('/uploadroom', UploadRoom);

module.exports = router;
