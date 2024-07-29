const express = require('express');
const UserController = require('../Controllers/User.Controller');
const router = express.Router();


router.get("/getcarouselsimg",UserController.Get_Carousels_Img)

module.exports = router;
