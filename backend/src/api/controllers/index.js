const {
	loginSkillsUser,
	signUpSkillsUser,
} = require("./skillsAuth.controller");

const {createDomain, updateDomain, readDomain} = require('./domain.controller')

module.exports = {
	SkillsAuthController: {
		loginSkillsUser,
		signUpSkillsUser,
	},
	domainController: {
		createDomain,
		updateDomain,
		readDomain
	}
};
