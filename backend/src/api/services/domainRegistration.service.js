const httpStatus = require("http-status");
const DomainRegistrations = require("../models/skills/domainRegistration.model");
const ApiError = require("../helpers/ApiError");

const skillsUserRegistration = async(firebaseUid) => {
const registration = await 
DomainRegistrations.create(
  { user: req.user._id, domain: domain._id },
);
}


const skillsUserSubmission = 
async(firebaseUid) => {
  const submission = await DomainRegistrations.create({ user: req.user._id, domain: domain._id }, );
};

module.exports = {
	skillsUserRegistration,
	skillsUserSubmission,
};
