import "./style.scss";
import box1 from "../../assets/box1.jpg";
import box2 from "../../assets/box2.jpg";
import especias from "../../assets/Fondo especias.png";
import { Container } from "../Container";
import { Fade } from "react-awesome-reveal";

export const OurServices = () => {
  return (
    <section id="OurServices" className="ourservices__container">
      <div>
        <img
          className="ourservices__container-especias"
          src={especias}
          alt=""
          width="50"
          height="50"
        />
        <Fade
          className="fadeOurServices"
          delay={400}
          damping={0.2}
          duration={1500}
          triggerOnce
        >
          <p className="ourservices__container-title">
            At <span>Byron On The Rocks</span>, we take pride in offering
            customized beverage packages that suit any venue.
          </p>
        </Fade>
        <Container>
          <Fade delay={400} damping={0.2} duration={1550} triggerOnce cascade>
            <div className="ourservices__container-box1">
              <p>
                From simple packages featuring a selection of beers, wines, and
                champagnes; to delving into the world of expertly crafted
                cocktails, mocktails, and homemade lemonade. We have the perfect
                beverage options to satisfy every palate.
              </p>
              <img src={box1} alt="" width="500" height="500" />
            </div>
          </Fade>
          <Fade delay={600} damping={0.2} duration={1600} triggerOnce>
            <div className="ourservices__container-box2">
              <img src={box2} alt="" width="500" height="500" />
              <p>
                Whether you envision an intimate soirée or a grand celebration,
                let <span>Byron On The Rocks</span> transform your event into an
                unforgettable experience. Contact us to discuss your event
                preferences, and let us raise the bar together. Cheers to
                creating extraordinary moments!
              </p>
            </div>
          </Fade>
        </Container>
      </div>
    </section>
  );
};
