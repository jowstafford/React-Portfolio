import "./Hero.scss";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div class="Hero" id="Hero">
      <div class="left">
        <div class="imgContainer">
          <img src="images/ProfessionalPortrait.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="container">
          <h2>Hello There, I Am</h2>
          <h1>Jordan Stafford</h1>
          <h3>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full-Stack Developer")
                  .pauseFor(1600)
                  .deleteAll()
                  .typeString("Front-End Designer")
                  .pauseFor(1600)
                  .deleteAll()
                  .typeString("Lifelong Student")
                  .pauseFor(1600)
                  .deleteAll()
                  .start();
              }}
            />
          </h3>
        </div>
      </div>
    </div>
  );
}
