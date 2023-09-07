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
// import img11 from "../../assets/carrousell/11.jpg";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";

export const Carrousell = () => {
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <section className="container__carrousell">
      <Fade cascade triggerOnce>
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            perPage: 3,
            focus: "center",
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
                autoplay: true,
                type: "loop",
                pauseOnHover: false,
              },
            },
          }}
        >
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
              src={img2}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img8}
              alt=""
              width="600"
              height="880"
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
              height="750"
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

          {/* <SplideSlide>
            <img
              className="slide-img"
              src={img6}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide> */}

          {/* <SplideSlide>
            <img
              className="slide-img"
              src={img9}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide> */}
          {screenWidth < 750 && (
            <SplideSlide>
              <img
                className="slide-img"
                src={img1}
                alt=""
                width="600"
                height="400"
              />
            </SplideSlide>
          )}
          <SplideSlide>
            <img
              className="slide-img"
              src={img10}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide>
          {/* <SplideSlide>
            <img
              className="slide-img"
              src={img11}
              alt=""
              width="600"
              height="400"
            />
          </SplideSlide> */}
        </Splide>
      </Fade>
    </section>
  );
};
