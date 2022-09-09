const { loginSkillsUser, signUpSkillsUser } = require("./skillsAuth.services");
const {
	createDomains,
	updateDomain,
	readDomainData,
} = require("./skillsDomain.service");
const {
	getSkillsUser,
	onboardingSkillUser,
	updateSkillsUser,
} = require("./skillsUser.services");

module.exports = {
	SkillAuthService: {
		loginSkillsUser,
		signUpSkillsUser,
	},
	domainService: {
		createDomains,
		updateDomain,
		readDomainData,
	},
	SkillUserService: {
		getSkillsUser,
		onboardingSkillUser,
		updateSkillsUser,
	},
};
