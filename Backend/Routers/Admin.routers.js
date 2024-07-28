const express = require('express');
const adminController = require('../Controllers/Admin.Controller');
const router = express.Router();

router.post('/carousels', adminController.uploadHome.single('image'), adminController.addCarousel)
router.post('/uploadroom', adminController.UploadRoom);
router.post('/uploadvehicle',adminController.UploadVehicle);
router.get('/allrooms', adminController.Allrooms)
router.get('/allvehicle',adminController.AllVehicle);
router.post('/deletevehicle',adminController.DeleteeVhicle)
module.exports = router;
