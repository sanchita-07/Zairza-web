const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../../.env") });

const envVarsSchema = Joi.object().keys({
	NODE_ENV: Joi.string().valid("production", "development", "test").required(),
	PORT: Joi.number().default(4000),
	MONGODB_URL: Joi.string().required().description("Mongodb URL"),
	FIREBASE_PROJECT_ID: Joi.string()
		.required()
		.description("Firebase project ID"),
	FIREBASE_CLIENT_EMAIL: Joi.string()
		.required()
		.description("Firebase client email"),
	FIREBASE_PRIVATE_KEY: Joi.string()
		.required()
		.description("Firebase private key"),
})
.unknown();

const { value: envVars, error } = envVarsSchema
	.prefs({ errors: { label: "key" } })
	.validate(process.env);

// [Error [ValidationError]: "npm_config_cache_lock_stale" is not allowed]
if (error) {
	console.log(error);
	throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
	env: envVars.NODE_ENV,
	port: envVars.PORT,
	mongoose: {
		url: envVars.MONGODB_URL + (envVars.NODE_ENV === "test" ? "-test" : ""),
	},
	firebase: {
		project_id: envVars.FIREBASE_PROJECT_ID,
		client_email: envVars.FIREBASE_CLIENT_EMAIL,
		private_key: envVars.FIREBASE_PRIVATE_KEY,
	},
};
