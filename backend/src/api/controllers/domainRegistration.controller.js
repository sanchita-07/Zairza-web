const httpStatus = require("http-status");
const catchAsync = require("../helpers/catchAsync");

const { DomainRegistrationService } = require("../services/index");

const skillsUserRegistration = catchAsync(async(req, res, next) => {
    const { firebaseUid  } = req;
    const {domainId} = req.body;
    
});

const skillsUserSubmission = catchAsync(async(req, res, next) => {
    const { firebaseUid } = req;

});

module.exports = {
    skillsUserRegistration,
    skillsUserSubmission,
}