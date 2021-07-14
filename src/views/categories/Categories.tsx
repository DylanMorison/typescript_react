import React from "react";

interface props {
	title: string;
}

const Categories: React.FC<props> = ({ title }) => {
	return (
		<div>
			<h2>Category: {title}</h2>
		</div>
	);
};

export default Categories;
