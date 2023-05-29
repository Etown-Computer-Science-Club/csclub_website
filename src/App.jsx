import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Resources from "./pages/Resources/Resources";
import AboutUs from "./pages/AboutUs/AboutUs";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<Router>
			<NavBar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Resources />} />
					<Route path="/resources" element={<Resources />} />
					<Route path="/about" element={<AboutUs />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
