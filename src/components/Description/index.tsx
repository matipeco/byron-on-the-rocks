import "./styled.scss";
import especias from "../../assets/Fondo especias.png";
import { Fade } from "react-awesome-reveal";

export const Description = () => {
  return (
    <section id="OurServices" className="description__container">
      <img src={especias} alt="" width="50" height="50" />

      <div className="description__text">
        <Fade cascade triggerOnce>
          <p className="description__text1">
            Our talented bartenders specialize in{" "}
          </p>
          <span>bar catering service in all kind of events</span>
          <p className="description__text2">
            ranging from weddings, birthdays celebrations, corporate events, or
            any other private gathering.
          </p>
        </Fade>

        <div className="description__textMob">
          <Fade cascade triggerOnce>
            <p>
              Our talented bartenders specialize in{" "}
              <span>bar catering service in all kind of events</span>ranging
              from weddings, birthdays celebrations, corporate events, or any
              other private gathering.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
};
