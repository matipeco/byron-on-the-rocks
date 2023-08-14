import { Fade } from "react-awesome-reveal";
import { Container } from "../Container";
import "./style.scss";
import about from "../../assets/aboutt.png";

export const About = () => {
  return (
    <section id="About" className="about__container">
      <div className="about__container-text">
        <Container>
          <Fade cascade delay={400} damping={0.2} duration={1500} triggerOnce>
            <img src={about} alt="" width="50" height="50" />
            <div>
              <Fade
                cascade
                delay={400}
                damping={0.2}
                duration={1500}
                triggerOnce
              >
                <h3 className="about__title">About Us</h3>
                <p>
                  My name is <span>Pedro</span>. For many years I've been
                  fascinated by the world of drinks and mixology.
                </p>
                <p>
                  At 27 years old, I decided to venture into bartending, dive in
                  headfirst, and start my own bar catering service. I love
                  surprising people with different combinations and flavors.
                </p>
                <p>
                  The possibility of bringing my ideas to different events and
                  venues excites me.{" "}
                  <span>I want to make each occasion unique</span> and ensure
                  people enjoy special moments with a drink in hand.
                </p>
                <p>
                  <span>Byron On The Rocks</span> is not just a job for me; it's
                  a lifestyle filled with joy, creativity, and dedication.
                </p>
                <span>Cheers!</span>
              </Fade>
            </div>
          </Fade>
        </Container>
      </div>
    </section>
  );
};
