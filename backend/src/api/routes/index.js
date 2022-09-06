// Skill++ routes
const SkillsAuthRoute = require("./skillsAuth.route");

const DomainRoute = require('./domains.route')
const SkillsUserRoute = require("./skillsUser.route");

module.exports = (app) => {
	// skill++
	app.use("/api/zairza/skill-plus-plus", SkillsAuthRoute);

	app.use("/api/zairza/domain", DomainRoute)
	app.use("/api/zairza/skill-plus-plus/user", SkillsUserRoute);
};
