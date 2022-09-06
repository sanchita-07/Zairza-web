const httpStatus = require("http-status");
const catchAsync = require("../helpers/catchAsync");

const {} = require("../services/index");

const getSkillUserDetails = catchAsync(async (req, res, next) => {
	const { firebaseUid } = req;
});

const updateSkillUserDetails = catchAsync(async (req, res, next) => {});

const onboardingSkillUser = catchAsync(async (req, res, next) => {});

module.exports = {
	getSkillUserDetails,
	updateSkillUserDetails,
	onboardingSkillUser,
};
