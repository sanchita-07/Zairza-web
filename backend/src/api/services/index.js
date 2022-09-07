const { loginSkillsUser, signUpSkillsUser } = require("./skillsAuth.services");
const {createDomains, updateDomain, readDomainData} = require('./skillsDomain.service')

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
