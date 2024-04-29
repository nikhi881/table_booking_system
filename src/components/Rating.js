import React from "react";
import "../static/styles/Rating.css";

const Rating = ({ value, total }) => {
	const stars = Array.from({ length: total }, (_, index) => {
		return index < value ? "filled" : "empty";
	});

	return (
		<div className="rating">
			{stars.map((star, index) => (
				<>
					<svg
						className={`star ${star === "filled" ? "filled" : ""}`}
						width="11"
						height="13"
						viewBox="0 0 11 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M5.5 2.12341L6.48314 4.91611L6.58931 5.2177L6.90762 5.24785L9.63427 5.50611L7.4982 7.66792L7.31106 7.85732L7.36375 8.1183L7.99002 11.2202L5.79259 9.63442L5.5 9.42328L5.20741 9.63442L3.00998 11.2202L3.63625 8.1183L3.68894 7.85732L3.5018 7.66792L1.36573 5.50611L4.09238 5.24785L4.41069 5.2177L4.51686 4.91611L5.5 2.12341Z"
							stroke="#F1C644"
						/>
					</svg>
				</>
			))}
		</div>
	);
};

export default Rating;