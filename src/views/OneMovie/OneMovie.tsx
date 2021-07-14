import React from "react";
import { useEffect } from "react";
import { useState } from "react";

type movie = {
	id: number;
	title: string;
	runtime: number;
};

const OneMovie = () => {
	const [movie, setMovie] = useState<movie>();

	useEffect(() => {
		setMovie({
			id: 1,
			title: "some movie",
			runtime: 150
		});
	}, []);

	return (
		<>
			{movie ? (
				<>
					<h2>Movie: {movie.title}</h2>
					<h3>Runtime: {movie.runtime}</h3>
					<h3>Movie: {movie.id}</h3>
				</>
			) : (
				<>Loading...</>
			)}
		</>
	);
};

export default OneMovie;
