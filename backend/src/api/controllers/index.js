const {
	loginSkillsUser,
	signUpSkillsUser,
} = require("./skillsAuth.controller");

const {createDomain, updateDomain, readDomain} = require('./domain.controller')

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
	domainController: {
		createDomain,
		updateDomain,
		readDomain
	},
	SkillsUserController: {
		getSkillUserDetails,
		onboardingSkillUser,
		updateSkillUserDetails,
	},

};
