const { loginSkillsUser, signUpSkillsUser } = require("./skillsAuth.services");

module.exports = {
	SkillAuthService: {
		loginSkillsUser,
		signUpSkillsUser,
	},
};
