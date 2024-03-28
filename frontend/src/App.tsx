import { Route, Routes } from "react-router-dom";
import { Home, NotFound, Pokemon } from "./pages";

function App() {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path="/pokemon/:name" element={<Pokemon />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
