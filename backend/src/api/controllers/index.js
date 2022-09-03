const {
	loginSkillsUser,
	signUpSkillsUser,
} = require("./skillsAuth.controller");

module.exports = {
	SkillsAuthController: {
		loginSkillsUser,
		signUpSkillsUser,
	},
};
