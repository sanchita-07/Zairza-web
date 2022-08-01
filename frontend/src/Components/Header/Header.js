import React from "react";
import Menu from "@mui/icons-material/Menu";
import "./Header.css";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<h1 className="header__logo">Zairza</h1>
			</div>
			<div className="header__right">
				<h4 className="header__text">Sign In</h4>
				<Menu className="header__menu" />
			</div>
		</div>
	);
}

export default Header;
