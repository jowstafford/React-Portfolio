import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { useState } from "react";
import "./App.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div class="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default App;
