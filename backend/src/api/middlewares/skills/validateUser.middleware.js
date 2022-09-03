const httpStatus = require("http-status");
const ApiError = require("../../helpers/ApiError");
const catchAsync = require("../../helpers/catchAsync");
const SkillsUser = require("../../models/skills/skills.user.model");
const { admin } = require("../../../app");

// 1st call get auth token , then getFirebaseUid then call checkIfAuthenticated

module.exports = getAuthToken = catchAsync(async (req, res, next) => {
	if (
		req.headers.authorization &&
		req.headers.authorization.split(" ")[0] === "Bearer"
	) {
		req.authToken = req.headers.authorization.split(" ")[1];
		next();
	}

	next(new ApiError(httpStatus.UNAUTHORIZED, "Authorization token not found"));
});

module.exports = getFirebaseUid = catchAsync(async (req, res, next) => {
	const { authToken } = req;
	const { uid: firebaseUid } = await admin.auth().verifyIdToken(authToken);

	req.firebaseUid = firebaseUid;
	next();
});

module.exports = checkIfAuthenticated = catchAsync(async (req, res, next) => {
	// search using the firebaseUid
	const { firebaseUid } = req;

	const existing_user_in_db = await SkillsUser.findOne({
		firebaseUid,
	});

	if (!existing_user_in_db)
		next(new ApiError(httpStatus.UNAUTHORIZED, "User not authorized"));

	req.user = existing_user_in_db;
	next();
});
