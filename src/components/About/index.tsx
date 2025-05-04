import { Fade } from "react-awesome-reveal";
import "./style.scss";
import peter from "../../assets/peterAbout.jpg";

export const About = () => {
  return (
    <section id="About" className="about__container">
      <Fade cascade delay={350} damping={0.2} duration={800} triggerOnce>
        <div className="container">
          <div className="container-text">
            <h3 className="about__title">About Us</h3>
            <Fade cascade delay={400} damping={0.2} duration={800} triggerOnce>
              <p>
                At Byron On The Rocks, we’re a team of passionate individuals
                united by the joy of creating meaningful experiences for people.
                We believe great service is about energy, presence, and the
                small details that make a big difference.
              </p>
              <p>
                As a team, we value respect, open communication, and a strong
                sense of community. We put passion into everything we do,
                staying fully present for the people we serve, and grounded in
                the idea that hospitality is, at its core, about generosity and
                connection.
              </p>
              <p>
                We’re proud of the culture we’ve built and the deep sense of
                belonging that defines us — and we're excited to keep growing,
                together, alongside everyone who welcomes us into their special
                moments.
                <span className="cheers">— Byron On The Rocks Team</span>
              </p>
            </Fade>
          </div>
          <img src={peter} alt="" width="50" height="50" />
        </div>
      </Fade>
    </section>
  );
};
