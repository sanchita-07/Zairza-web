const { loginSkillsUser, signUpSkillsUser } = require("./skillsAuth.services");
const { skillsUserRegistration,
	skillsUserSubmission } = require("./domainRegistration.services");

module.exports = {
	SkillAuthService: {
		loginSkillsUser,
		signUpSkillsUser,
	},
	DomainRegistrationService: {
		skillsUserRegistration,
		skillsUserSubmission,
	}
};
