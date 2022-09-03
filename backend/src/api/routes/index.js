const SkillsAuthRoute = require("./skillsAuth.route");

module.exports = (app) => {
	app.use("/api/zairza/skill-plus-plus", SkillsAuthRoute);
};
