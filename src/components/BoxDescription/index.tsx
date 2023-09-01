import { Fade } from "react-awesome-reveal";
import services from "../../assets/img6.jpg";
import services2 from "../../assets/mesa1.png";
import services3 from "../../assets/mesa2.png";
import "./styled.scss";

export const BoxDescription = () => {
  return (
    <div className="description__box">
      <img className="img" src={services} alt="" width="50" height="50" />
      <img className="imgMob" src={services2} alt="" width="50" height="50" />
      {/* <img src={services3} alt="" width="50" height="50" /> */}
      <Fade direction="right" duration={2000} triggerOnce>
        <p>
          With much love and dedication, we will adapt our service to match your
          preferences, ensuring
          <span> that your vision becomes a reality.</span>
        </p>
      </Fade>
    </div>
  );
};
