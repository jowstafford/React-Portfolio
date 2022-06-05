import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div class={"navbar " + (menuOpen && "active")}>
      <div class="container">
        <div class="left">
          <a href="#Hero" class="logo">
            <img src="images/JS_Icon.png" alt="" class="jsLogo" />
          </a>
          <div class="itemContainer">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span>+1 903 744 9700</span>
          </div>
          <div class="itemContainer">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>jordanstafforddev@gmail.com</span>
          </div>
        </div>
        <div class="right">
          <div class="hamburgerMenu" onClick={() => setMenuOpen(!menuOpen)}>
            <span class="line1"></span>
            <span class="line2"></span>
            <span class="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
