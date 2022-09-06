const SkillsAuthRoute = require("./skillsAuth.route");
const DomainRoute = require('./domains.route')

module.exports = (app) => {
	app.use("/api/zairza/skill-plus-plus", SkillsAuthRoute);
	app.use("/api/zairza/domain", DomainRoute)
};
