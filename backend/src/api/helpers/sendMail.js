const nodemailer = require("nodemailer");
const config = require("../../config/config");

var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: config.nodemailer.email,
		pass: config.nodemailer.password,
	},
});

// const mailOptions = {
//     from
// }

module.exports = {};
