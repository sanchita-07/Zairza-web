const {
	loginSkillsUser,
	signUpSkillsUser,
} = require("./skillsAuth.controller");

const {createDomain, updateDomain, readDomain} = require('./skillsDomain.controller')

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
