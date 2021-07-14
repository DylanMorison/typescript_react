import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
	useRouteMatch,
	Link
} from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme/theme";
import { CssBaseline } from "@material-ui/core";
import Navigation from "./components/navigation/Navigation";
import Home from "./views/home/Home";
import Movies from "./views/movies/Movies";
import Admin from "./views/admin/Admin";
import Categories from "./views/categories/Categories";
import OneMovie from "./views/OneMovie/OneMovie";

function App() {
	return (
		<Router>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Navigation>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/movies" component={Movies} />
						<Route exact path="/movies/:id" component={OneMovie} />
						<Route exact path="/catalogue" component={Admin} />
						<Route
							exact
							path="/categories"
							component={CategoriesPage}
						/>
						<Route
							exact
							path="/categories/drama"
							render={(props) => (
								<Categories {...props} title={`Drama`} />
							)}
						/>
						<Route
							exact
							path="/categories/comedy"
							render={(props) => (
								<Categories {...props} title={`Comedy`} />
							)}
						/>
					</Switch>
				</Navigation>
			</ThemeProvider>
		</Router>
	);
}

function Movie() {
	let { id } = useParams<{ id: string }>();

	return <h2>Movie id: {id}</h2>;
}

type props = {
	title: string;
};

const CategoriesPage: React.FC<props> = () => {
	const { path, url } = useRouteMatch();
	return (
		<div>
			<h2>Categories</h2>
			<ul>
				<li>
					<Link to={`${path}/comedy`}>Comedy</Link>
				</li>
				<li>
					<Link to={`${path}/drama`}>Drama</Link>
				</li>
			</ul>
		</div>
	);
};

export default App;
