const express = require("express");
const router = express.Router();

const {
	getFirebaseUid,
	getAuthToken,
    checkIfAuthenticated 
} = require("../middlewares/skills/validateUser.middleware");

const { DomainRegistrationController } = require("../controllers/index");

router.post("/registration",[getAuthToken, getFirebaseUid, checkIfAuthenticated],DomainRegistrationController.skillsUserRegistration);

router.post("/submission",[getAuthToken, getFirebaseUid, checkIfAuthenticated],DomainRegistrationController.skillsUserSubmission);

module.exports = router;