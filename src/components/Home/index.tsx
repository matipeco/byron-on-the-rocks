// import background from "../../assets/edit.png"
import { Container } from "../Container";
import "./style.scss";
import { Fade } from "react-awesome-reveal";

export const Home = () => {
  return (
    <header id="Home" className="home__container">
      <Container>
        <Fade cascade triggerOnce>
          <div className="home__text">
            <h2 className="home__text-title">
              Welcome to our world of unique flavors span and experiences!
            </h2>

            <h2 className="home__text-titleMob">
              <span> Welcome to our world of </span>
              <span>unique flavors and experiences!</span>
            </h2>
            <p>
              We are <span>Byron On The Rocks</span>, experts in pop-up bar
              events in the beautiful region of Northern Rivers and its
              surroundings.
            </p>
            <div className="scrollAuto" id="Description"></div>
            <a className="home__button" href="#Description">
              Explore
            </a>
          </div>
        </Fade>
      </Container>
    </header>
  );
};
