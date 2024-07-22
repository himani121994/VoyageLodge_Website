const express = require('express');
const { UploadRoom,UploadVehicle } = require('../Controllers/Admin.Controller');
const router = express.Router();

router.post('/uploadroom', UploadRoom);
router.post('/uploadvehicle',UploadVehicle);
module.exports = router;
