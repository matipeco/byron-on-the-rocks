import { Container } from "../Container";
import { FormEmail } from "../FormEmail";
// import vaso from "../../assets/vaso.svg";
import wpp from "../../assets/wapp.svg";
import mail from "../../assets/mail.svg";
import insta from "../../assets/insta.svg";
import "./style.scss";

export const Contact = () => {
  return (
    <section id="Contact" className="contact__container">
      <Container>
        {/* <img
          className="contact__img"
          src={vaso}
          alt=""
          width="50"
          height="50"
        /> */}
        <div className="contact__container-text">
          <h3>Contact Us</h3>
          <FormEmail />
          <div className="contact__container-icons">
            {/* gola */}
            <a href="mailto:byronontherocksbar@gmail.com">
              <img src={mail} alt="" width="45" height="45" />
            </a>
            <a href="#">
              <img src={wpp} alt="" width="45" height="45" />
            </a>
            <a href="#">
              <img src={insta} alt="" width="50" height="50" />
            </a>
          </div>
          {/* <p>Phone: +61 431 218 161</p>
          <p>Email: byronontherocksbar@gmail.com</p> */}
        </div>
      </Container>
    </section>
  );
};
