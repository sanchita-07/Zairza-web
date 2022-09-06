const httpStatus = require("http-status");
const SkillsUser = require("../models/skills/skills.user.model");
const ApiError = require("../helpers/ApiError");

const getSkillsUser = async (firebaseUid) => {
	const userInDb = await SkillsUser.findOne({ firebaseUid });

	if (!userInDb) {
		throw new ApiError(httpStatus.UNAUTHORIZED, "User doesn't exist");
	}

	return userInDb;
};

const updateSkillsUser = async (firebaseUid, ...otherDetails) => {
	const updateUserInDb = await SkillsUser.findOneAndUpdate(
		{ firebaseUid },
		{ otherDetails },
		{
			returnOriginal: false,
		}
	).catch((err) => {
		throw new ApiError(httpStatus.UNAUTHORIZED, err);
	});

	return updateUserInDb;
};

const onboardingSkillUser = async (firebaseUid, ...otherDetails) => {};

module.exports = {
	getSkillsUser,
	updateSkillsUser,
};
