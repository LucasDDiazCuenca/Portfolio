import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppContext from "./AppContext";
import UnderWork from "./pages/UnderWork";
import AboutMe from "./pages/aboutMe";

const { Provider } = AppContext;

function App() {
	return (
		<Router>
			<Provider value={null}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="under-work" element={<UnderWork />} />
					<Route path="about-me" element={<AboutMe />} />
				</Routes>
			</Provider>
		</Router>
	);
}

export default App;
