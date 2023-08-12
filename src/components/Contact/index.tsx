import logo from "../../assets/logo-black.svg";
import { FormEmail } from "../FormEmail";
import wpp from "../../assets/wapp.svg";
import mail from "../../assets/mail.svg";
import insta from "../../assets/insta.svg";
// import vaso from "../../assets/vaso.svg";
import "./style.scss";

export const Contact = () => {
  return (
    <section id="Contact" className="contact__container">
      <div className="contact__container-box">
        <div>
          <img
            className="contact__container-img"
            src={logo}
            alt=""
            width="500"
            height="500"
          />
          <div className="contact__container-icons">
            <a href="#">
              <img
                className="contact__container-icons-wpp"
                src={wpp}
                alt=""
                width="50"
                height="50"
              />
            </a>
            <a href="#">
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
        </div>
        <div>
          <h3>Contact Us</h3>
          <FormEmail />
        </div>
      </div>
    </section>
  );
};

{
  /* <p>Phone: +61 431 218 161</p>
<p>Email: byronontherocksbar@gmail.com</p> */
}
