import "./styled.scss";
import img1 from "../../assets/carrousell/img1.jpg";
import img2 from "../../assets/carrousell/img2.jpg";
import img3 from "../../assets/carrousell/img3.jpg";
import img4 from "../../assets/carrousell/img4.jpg";
import img5 from "../../assets/carrousell/img5.jpg";
import img6 from "../../assets/carrousell/img6.jpg";
import img7 from "../../assets/carrousell/img7.jpg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Fade } from "react-awesome-reveal";
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-greens';

export const Carrousell = () => {
  return (
    <section className="container__carrousell">
      <Fade delay={500} damping={0.2} duration={1200} triggerOnce>
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            focus: "center",
            // width: "100%",
            // height: "50rem",
            fixedWidth: "auto",
            fixedHeight: "30rem",
            autoplay: true,
            interval: 2200,
            trimSpace: false,
            drag: true,
            easing: "cubic-bezier(0, 0, 0.58, 1)",
            speed: 400,
            rewind: true,
            gap: 0,
          }}
        >
          <SplideSlide>
            <img
              className="slide-img"
              src={img1}
              alt=""
              width="600"
              height="300"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img2}
              alt=""
              width="600"
              height="300"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img3}
              alt=""
              width="600"
              height="300"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img4}
              alt=""
              width="600"
              height="300"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="slide-img"
              src={img5}
              alt=""
              width="600"
              height="300"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img6}
              alt=""
              width="600"
              height="300"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="slide-img"
              src={img7}
              alt=""
              width="600"
              height="300"
            />
          </SplideSlide>
        </Splide>
      </Fade>
    </section>
  );
};
