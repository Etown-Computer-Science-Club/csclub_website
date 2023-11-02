import {
  ChakraProvider, extendTheme, Box, Flex,
} from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useRedirect from './redirects/useRedirect';

import Resources from './pages/Resources';
import AboutUs from './pages/AboutUs';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';
import Events from './pages/Events';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

if (localStorage.getItem('chakra-ui-color-mode') === 'light') localStorage.removeItem('chakra-ui-color-mode');

function App() {
  useRedirect();

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Flex direction="column" minHeight="100vh">
          <NavBar />
          <Box width="100%" padding={10} flex={1} maxW="container.xl" mx="auto">
            <Routes>
              <Route path="/" element={<Events />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/events" element={<Events />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

export default App;
