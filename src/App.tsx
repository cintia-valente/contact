
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import { Footer } from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import User from './pages/User';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
