import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";

function StyledButton({
	text,
	backgroundColor,
	textColor,
	arrowIcon,
	marginTop,
}) {
	return (
		<Button
			endIcon={arrowIcon === "true" ? <ArrowForwardIcon /> : ""}
			style={{
				backgroundColor: backgroundColor,
				color: textColor,
				borderRadius: "48px",
				fontSize: "20px",
				padding: "16px 32px 16px 32px",
			}}
			className="StyledButton"
		>
			{text}
		</Button>
	);
}

export default StyledButton;
