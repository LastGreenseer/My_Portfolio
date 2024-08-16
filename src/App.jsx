import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from "./pages/Home";
import ContactMe from './pages/ContactMe';
import GlobalStyle from "./GlobalStyle";

const App = () => {

  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ContactMe" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App
