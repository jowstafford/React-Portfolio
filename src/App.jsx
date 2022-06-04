import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import References from "./components/References";
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
            <Route path="/hero" element={<Hero />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
