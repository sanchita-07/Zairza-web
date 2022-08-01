import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./Footer.css";

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-container__left">
				<div className="footer-container__left__top">
					<h1 className="footer-container__title">Something on your mind</h1>
					<h4 className="footer-container__description">
						We will help you with your ideas and turn it into reality
					</h4>
				</div>
				<div className="footer-container__left__bottom">
					<p className="footer-container__address">
						OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha.+91
						7205883336
					</p>
				</div>
			</div>
			<div className="footer-container__right">
				<div className="footer-container__social_icons">
					<TwitterIcon className="footer-container__icons" />
				</div>
				<div className="footer-container__social_icons">
					<MailOutlineIcon className="footer-container__icons" />
				</div>
				<div className="footer-container__social_icons">
					<InstagramIcon className="footer-container__icons" />
				</div>
				<div className="footer-container__social_icons">
					<GitHubIcon className="footer-container__icons" />
				</div>
			</div>
		</div>
	);
}

export default Footer;
