import "./styled.scss";
// import img1 from "../../assets/carrousell/1.jpg";
import img2 from "../../assets/carrousell/2.jpg";
import img3 from "../../assets/carrousell/3.jpg";
import img4 from "../../assets/carrousell/4.jpg";
import img5 from "../../assets/carrousell/5.jpg";
// import img7 from "../../assets/carrousell/7.jpg";
import img8 from "../../assets/carrousell/8.jpg";
// import img10 from "../../assets/carrousell/10.jpg";
import img11 from "../../assets/carrousell/11.jpg";
import img12 from "../../assets/carrousell/12.jpg";
import img13 from "../../assets/carrousell/13.jpg";
import img14 from "../../assets/carrousell/14.jpg";
import img15 from "../../assets/carrousell/15.jpg";
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
              src={img8}
              alt="carrousell1"
              width="550"
              height="550"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="slide-img"
              src={img4}
              alt="carrousell2"
              width="450"
              height="550"
            />
          </SplideSlide>

          <SplideSlide>
            <img
              className="slide-img"
              src={img11}
              alt="carrousell3"
              width="500"
              height="550"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img2}
              alt="carrousell14"
              width="600"
              height="550"
            />
          </SplideSlide>
          {screenWidth > 750 && (
            <SplideSlide>
              <img
                className="slide-img"
                src={img5}
                alt="carrousell6"
                width="1005"
                height="550"
              />
            </SplideSlide>
          )}
          <SplideSlide>
            <img
              className="slide-img"
              src={img15}
              alt="carrousell7"
              width="650"
              height="720"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img3}
              alt="carrousell8"
              width="600"
              height="720"
            />
          </SplideSlide>
          {screenWidth > 750 && (
            <SplideSlide>
              <img
                className="slide-img"
                src={img12}
                alt="carrousell9"
                width="550"
                height="500"
              />
            </SplideSlide>
          )}
          <SplideSlide>
            <img
              className="slide-img"
              src={img13}
              alt="carrousell10"
              width="440"
              height="500"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              className="slide-img"
              src={img14}
              alt="carrousell11"
              width="390"
              height="500"
            />
          </SplideSlide>
        </Splide>
      </Fade>
    </section>
  );
};
