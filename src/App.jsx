import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";

const theme = extendTheme({
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
});

if (localStorage.getItem("chakra-ui-color-mode") === "light")
	localStorage.removeItem("chakra-ui-color-mode");

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Router>
				<NavBar />
				<Box p={5} maxW="container.xl" mx="auto">
					<Routes>
						<Route path="/" element={<Resources />} />
						<Route path="/resources" element={<Resources />} />
						<Route path="/about" element={<AboutUs />} />
					</Routes>
				</Box>
				<Footer />
			</Router>
		</ChakraProvider>
	);
}

export default App;
