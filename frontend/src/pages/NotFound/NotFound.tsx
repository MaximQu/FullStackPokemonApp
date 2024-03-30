import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<main className="container mx-auto pt-40 text-center font-madimi">
			<h1 className="mb-4 text-3xl">Not Found</h1>
			<p className="mb-8 text-xl">
				The page you are looking for does not exist.
			</p>
			<img className="mx-auto mb-8" src="/img/error-pikachu.gif" alt="" />
			<Link className="btn" to="/">
				Back
			</Link>
		</main>
	);
};
