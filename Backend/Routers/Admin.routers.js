const express = require('express');
const adminController = require('../Controllers/Admin.Controller');
const router = express.Router();

router.post('/uploadroom', adminController.UploadRoom);
router.post('/uploadvehicle',adminController.UploadVehicle);
router.get('/allrooms', adminController.Allrooms)
module.exports = router;
