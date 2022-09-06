const { loginSkillsUser, signUpSkillsUser } = require("./skillsAuth.services");
const {createDomains, updateDomain, readDomainData} = require('./domain.service')

module.exports = {
	SkillAuthService: {
		loginSkillsUser,
		signUpSkillsUser,
	},
	domainService:{
       createDomains,
	   updateDomain,
	   readDomainData
	}
};
