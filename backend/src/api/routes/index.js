const SkillsAuthRoute = require("./skillsAuth.route");
const DomainRegistrationRoute = require("./DomainRegistration.route");

module.exports = (app) => {
	app.use("/api/zairza/skill-plus-plus", SkillsAuthRoute);
};
