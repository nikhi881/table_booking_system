import React from "react";
import "../static/styles/About.css";
import imageOne from "../static/images/Mario and Adrian b.jpg";
import imageTwo from "../static/images/Mario and Adrian A.jpg";

const About = () => {
	return (
		<section className="about">
			<div className="about-container">
				<div className="about-content">
					<h1 className="about-title">Little Lemon</h1>
					<h2 className="about-subtitle">Chicago</h2>
					<p className="about-text">
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
						sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam. Amet minim mollit non deserunt ullamco est sit aliqua dolor
						do amet sint. Velit officia consequat duis enim velit mollit.
						Exercitation veniam.
					</p>
				</div>
				<div className="about-images">
					<img src={imageTwo} alt="Mario and Adrian" className="about-image" />
					<img src={imageOne} alt="Mario and Adrian" className="about-image" />
				</div>
			</div>
		</section>
	);
};

export default About;
