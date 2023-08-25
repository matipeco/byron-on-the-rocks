import logo from "../../assets/logo-black.svg";
import { FormEmail } from "../FormEmail";
import wpp from "../../assets/wapp.svg";
import mail from "../../assets/mail.svg";
import insta from "../../assets/insta.svg";
import phone from "../../assets/phone.svg";
// import vaso from "../../assets/vaso.svg";
import "./style.scss";
import { Fade } from "react-awesome-reveal";

export const Contact = () => {
  return (
    <section id="Contact" className="contact__container">
      <Fade delay={400} damping={0.2} duration={1500} triggerOnce>
        <div className="contact__container-box">
          <div>
            <h3>Contact Us</h3>
            <FormEmail />
          </div>
          <div className="contact__container-box-2">
            <img
              className="contact__container-img"
              src={logo}
              alt=""
              width="500"
              height="500"
            />
            <div className="contact__container-icons">
              <a href="https://wa.link/ciqerc">
                <img
                  className="contact__container-icons-wpp"
                  src={wpp}
                  alt=""
                  width="50"
                  height="50"
                />
              </a>
              <a href="https://www.instagram.com/byronontherocks/">
                <img
                  className="contact__container-icons-insta"
                  src={insta}
                  alt=""
                  width="50"
                  height="50"
                />
              </a>
              <a href="mailto:byronontherocksbar@gmail.com">
                <img
                  className="contact__container-icons-mail"
                  src={mail}
                  alt=""
                  width="50"
                  height="50"
                />
              </a>
            </div>
            <p className="phone">
              <img src={phone} alt="" width="40" height="40" />
              +61 431 218 161
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

{
  /* <p>Phone: +61 431 218 161</p>
<p>Email: byronontherocksbar@gmail.com</p> */
}
