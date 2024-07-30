const express = require('express');
const UserController = require('../Controllers/User.Controller');
const router = express.Router();


router.get("/getcarouselsimg",UserController.Get_Carousels_Img)
router.get("/room",UserController.Get_Room)

module.exports = router;
