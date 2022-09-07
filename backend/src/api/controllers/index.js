const {
	loginSkillsUser,
	signUpSkillsUser,
} = require("./skillsAuth.controller");

const {

} = require("./domainRegistration.controller")
module.exports = {
	SkillsAuthController: {
		loginSkillsUser,
		signUpSkillsUser,
	},
	DomainRegistrationController: {
		skillsUserRegistration,
		skillsUserSubmission,
	}
};
