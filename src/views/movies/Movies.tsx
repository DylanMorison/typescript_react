import React, { useState } from "react";
import { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			// display: "flex",
			// justifyContent: "center",
			// margin: "150px 0 0 0"
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: "center",
			color: theme.palette.text.secondary
		}
	})
);

interface movie {
	id: number;
	title: string;
	runtime: number;
}

const Movies = () => {
	const classes = useStyles();

	const [movies, setMovies] = useState<movie[]>([]);

	useEffect(() => {
		const movies = [
			{
				id: 1,
				title: "movie 1",
				runtime: 142
			},
			{
				id: 2,
				title: "movie 2",
				runtime: 175
			},
			{
				id: 3,
				title: "movie 3",
				runtime: 142
			}
		];
		setMovies(movies);
	}, []);

	return (
		<div className={classes.root}>
			<h2>Choose a movie</h2>
			<ul>
				{movies.map((movie, index) => (
					<li key={index}>
						<Link to={`/movies/${movie.id}`}>{movie.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Movies;