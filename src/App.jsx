import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from "./pages/Home";
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App
