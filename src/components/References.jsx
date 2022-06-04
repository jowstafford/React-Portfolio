import "./References.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function References() {
  return (
    <div class="references" id="references">
      <h1>References</h1>
      <div class="container">
        <div class="card">
          <div class="top">
            <img src="./images/PeterSurowski.png" class="user" alt="" />
          </div>
          <div class="center">
            <div class="IconContainer">
              <FontAwesomeIcon icon={faEnvelope} class="icon" />
              <div>
                <span>petersurowski@gmail.com</span>
              </div>
            </div>
            <div class="IconContainer">
              <FontAwesomeIcon icon={faPhone} class="iconBottom" />
              <div>
                <span>+1 951 818 9771</span>
              </div>
            </div>
          </div>
          <div class="bottom">
            <h3>Peter Surowski</h3>
            <h4>Coding Bootcamp Instructor</h4>
          </div>
        </div>
        <div class="card">
          <div class="top">
            <img src="./images/JonTaylor.png" class="user" alt="" />
          </div>
          <div class="center">
            <div class="IconContainer">
              <FontAwesomeIcon icon={faLinkedin} class="icon" />
              <div>
                <span>www.linkedin.com/in/vue-shell</span>
              </div>
            </div>
            <div class="IconContainer">
              <FontAwesomeIcon icon={faPhone} class="iconBottom" />
              <div>
                <span>+1 512 740 9784</span>
              </div>
            </div>
          </div>
          <div class="bottom">
            <h3>Jon Taylor</h3>
            <h4>Full-Stack Developer</h4>
          </div>
        </div>
        <div class="card">
          <div class="top">
            <img src="./images/KrishnaAryal.png" class="user" alt="" />
          </div>
          <div class="center">
            <div class="IconContainer">
              <FontAwesomeIcon icon={faEnvelope} class="icon" />
              <div>
                <span>karyal@collin.edu</span>
              </div>
            </div>
            <div class="IconContainer">
              <FontAwesomeIcon icon={faPhone} class="iconBottom" />
              <div>
                <span>+1 757 273 4260</span>
              </div>
            </div>
          </div>
          <div class="bottom">
            <h3>Krishna Aryal</h3>
            <h4>Engineering College Professor</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
