import "./style.scss";
import box1 from "../../assets/box1.jpg";
import box2 from "../../assets/box2.jpg";
import especias from "../../assets/Fondo especias.png";
import { Container } from "../Container";
import { Fade } from "react-awesome-reveal";

export const OurServices = () => {
  return (
    <section className="ourservices__container">
      <div>
        <img
          className="ourservices__container-especias"
          src={especias}
          alt="decoration"
          width="50"
          height="50"
        />
        <Fade delay={400} damping={0.2} duration={1100} triggerOnce>
          <div className="fadeOurServices">
            <p className="ourservices__container-title">
              At <span>Byron On The Rocks</span>, we take pride in offering
              customized beverage packages that suit any venue.
            </p>
          </div>
        </Fade>
        {/* <Container> */}
        <Fade triggerOnce>
          <div className="ourservices__container-box1Mob">
            <p>
              {" "}
              We have the perfect beverage options
              <span> to satisfy every palate.</span>
            </p>
            <img src={box1} alt="box1" width="500" height="500" />
          </div>
          <div className="ourservices__container-box1">
            <div>
              <p>
                From simple packages featuring a selection of beers, wines, and
                champagnes; to delving into the world of expertly crafted
                cocktails, mocktails, and homemade lemonade.{" "}
                <span>
                  We have the perfect beverage options to satisfy every palate.
                </span>
              </p>
            </div>
            <img src={box1} alt="box1" width="400" height="400" />
          </div>
        </Fade>
        <Fade damping={0.2} triggerOnce>
          <div className="ourservices__container-box2">
            <img src={box2} alt="bartender1" width="500" height="500" />
            <div>
              <p>
                Whether you envision an intimate soirée or a grand celebration,
                let <span>Byron On The Rocks</span> transform your event into an
                unforgettable experience. Contact us to discuss your event
                preferences, and let us raise the bar together.{" "}
                <span>Cheers to creating extraordinary moments!</span>
              </p>
            </div>
          </div>
          <div className="ourservices__container-box2Mob">
            <img src={box2} alt="bartender" width="500" height="500" />
            <div className="text-container">
              Whether you envision an intimate soirée or a grand celebration,
              let <span>Byron On The Rocks</span> transform your event into an
              unforgettable experience.
              <p>
                Contact us to discuss your event preferences, and let us raise
                the bar together.
              </p>
              <p className="bold">Cheers to creating extraordinary moments!</p>
            </div>
          </div>
        </Fade>
        {/* </Container> */}
      </div>
    </section>
  );
};
