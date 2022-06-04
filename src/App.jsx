import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div class="app">
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div class="sections">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
