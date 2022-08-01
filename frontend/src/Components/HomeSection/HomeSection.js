import React from "react";
import { Button } from "../index";
import "./HomeSection.css";

function HomeSection({
	title,
	titleColor,
	description,
	buttonText,
	buttonColor,
	arrowIcon,
	buttonTextColor,
	sectionBackgroundColor,
	flexDirection,
}) {
	return (
		<div
			className="home-section"
			style={{
				backgroundColor: sectionBackgroundColor,
				flexDirection: flexDirection,
			}}
		>
			<div
				className="home-section__left"
				style={
					flexDirection === "row" ? { marginLeft: "8%" } : { marginRight: "8%" }
				}
			>
				<h1 className="home-section__title" style={{ color: titleColor }}>
					{title}
				</h1>
				<p className="home-section__description">{description}</p>
				<Button
					text={buttonText}
					backgroundColor={buttonColor}
					textColor={buttonTextColor}
					arrowIcon={arrowIcon}
				/>
			</div>
			<div
				className="home-section__right"
				style={
					flexDirection === "row" ? { marginRight: "6%" } : { marginLeft: "6%" }
				}
			></div>
		</div>
	);
}

export default HomeSection;
