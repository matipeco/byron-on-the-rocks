import "./styled.scss";
import img1 from "../../assets/carrousell/1.jpg";
import img2 from "../../assets/carrousell/2.jpg";
import img3 from "../../assets/carrousell/3.jpg";
import img4 from "../../assets/carrousell/4.jpg";
import img5 from "../../assets/carrousell/5.jpg";
import img6 from "../../assets/carrousell/6.jpg";
import img7 from "../../assets/carrousell/7.jpg";
import img8 from "../../assets/carrousell/8.jpg";
import img9 from "../../assets/carrousell/9.jpg";
import img10 from "../../assets/carrousell/10.jpg";
import img11 from "../../assets/carrousell/11.jpg";
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
            autoplay: true,
            perPage: 3,
            focus: "center",
            // width: "100%",
            // height: "50rem",
            fixedWidth: "auto",
            fixedHeight: "30rem",
            interval: 2200,
            trimSpace: false,
            drag: true,
            easing: "cubic-bezier(0, 0, 0.58, 1)",
            speed: 400,
            rewind: true,
            pauseOnHover: false,
            gap: 0,
            breakpoints: {
              750: {
                perPage: 1,
                // width: 200,
                autoplay: true,
                type: "loop",
                pauseOnHover: false,
              },
            },
          }}
          // onCreated={(splide: any) => {
          //   // Configura opciones adicionales para dispositivos móviles
          //   if (window.innerWidth <= 750) {
          //     splide.options = {
          //       ...splide.options,
          //       autoplay: true, // Activa el autoplay
          //       interval: 2200, // Intervalo en milisegundos
          //     };
          //   }
          // }}
        >
          <SplideSlide>
            <img
              className="slide-img"
              src={img1}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img2}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img3}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img4}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="slide-img"
              src={img5}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img6}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="slide-img"
              src={img7}
              alt=""
              width="600"
              height="750"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img8}
              alt=""
              width="600"
              height="750"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img9}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img10}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img11}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>
        </Splide>
      </Fade>
    </section>
  );
};
