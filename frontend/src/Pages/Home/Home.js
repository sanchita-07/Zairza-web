import React from "react";
import { Header, HomeSection } from "../../Components";

function Home() {
	return (
		<>
			<Header />
			<HomeSection
				title="Curious Minds striving to Learn"
				titleColor="black"
				description="We develop skills in multiple domains related to tech and design. Skills that will help you gain recognition in the industry and help you grow."
				buttonText="Join Us"
				buttonColor="#1071FF"
				arrowIcon="true"
				buttonTextColor="white"
				sectionBackgroundColor="white"
				flexDirection="row"
			/>
			<HomeSection
				title="Choose the world you want to dive in"
				titleColor="black"
				description="A bunch of interesting and innovative projects, showing skills and expertise of members in their respective fields."
				buttonText="Have a look"
				buttonColor="#FF7610"
				arrowIcon="true"
				buttonTextColor="white"
				sectionBackgroundColor="#FFF1E7"
				flexDirection="row-reverse"
			/>
			<HomeSection
				title="On a tech adventure to turn ideas into Reality"
				titleColor="black"
				description="A bunch of interesting and innovative projects, showing skills and expertise of members in their respective fields."
				buttonText="Have a Look"
				buttonColor="#1071FF"
				arrowIcon="true"
				buttonTextColor="white"
				sectionBackgroundColor="white"
				flexDirection="row"
			/>
			<HomeSection
				title="Insightful resources  and sessions that will help you grow"
				titleColor="white"
				description="Blogs , Articles , Books etc, curated by core members of zairza."
				buttonText="Get More"
				buttonColor="#FF7610"
				arrowIcon="true"
				buttonTextColor="white"
				sectionBackgroundColor="#00255C"
				flexDirection="row-reverse"
			/>
		</>
	);
}

export default Home;
