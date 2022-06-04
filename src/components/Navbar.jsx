import "./topbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div class="navbar">
      <div class="wrapper">
        <div class="left">
          <a href="#intro" class="logo">
            <img src="assets/JS_Icon.png" alt="" class="jsLogo"/>
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
      </div>
    </div>
  );
}
