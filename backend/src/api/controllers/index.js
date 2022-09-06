const {
	loginSkillsUser,
	signUpSkillsUser,
} = require("./skillsAuth.controller");

const {
	getSkillUserDetails,
	onboardingSkillUser,
	updateSkillUserDetails,
} = require("./skillsUser.controller");

module.exports = {
	SkillsAuthController: {
		loginSkillsUser,
		signUpSkillsUser,
	},
	SkillsUserController: {
		getSkillUserDetails,
		onboardingSkillUser,
		updateSkillUserDetails,
	},
};
