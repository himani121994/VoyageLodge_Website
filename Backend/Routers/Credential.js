const express = require('express');
const CredentialController = require('../Controllers/Credential.Controller');
const router = express.Router();

router.post("/usersighup",CredentialController.UserSighup)


module.exports = router;
