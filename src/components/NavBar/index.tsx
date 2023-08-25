import { useState, useEffect } from "react";
import { Container } from "../Container";
import logo from "../../assets/logo-black.svg";
import "./style.scss";
import { Fade } from "react-awesome-reveal";
import menu from "../../assets/nav.svg";
import close from "../../assets/btnClose.svg";
import { MouseEvent } from "react";

export const NavBar = () => {
  const [logoSize, setLogoSize] = useState(160);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
    };

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const newLogoSize = scrollTop <= 60 ? 160 : 90;
      setLogoSize(newLogoSize);
      setScrolledDown(scrollTop > 0);
    };

    if (screenWidth > 750) {
      setNavMobile(false);
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    } else {
      setNavMobile(true);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const nav = document.getElementById("nav");
  const openNav = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    nav?.classList.add("open");
  };

  const closeNav = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    nav?.classList.remove("open");
  };

  const logoDom = document.getElementById("logo");
  logoDom?.addEventListener("click", () => {
    nav?.classList.remove("open");
  });

  const navLinks = document.querySelectorAll(".nav__list-item a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav?.classList.remove("open");
    });
  });

  return (
    <>
      <button
        id="btn-menu"
        className={navMobile ? `btn-menu` : `btn-menu hidden`}
        onClick={(ev) => openNav(ev)}
      >
        <img src={menu} alt="" width="50" height="50" />
      </button>
      <nav className={scrolledDown ? "scrolled" : ""} id="nav">
        <Container>
          {navMobile && (
            <div className="btn-close-container">
              <button className="btn-close" onClick={(ev) => closeNav(ev)}>
                <img src={close} alt="" width="50" height="50" />
              </button>
            </div>
          )}
          <Fade delay={100} direction="down" triggerOnce>
            <a href="#" id="logo">
              <img
                className="logo"
                src={logo}
                alt="logo"
                width={logoSize}
                height={logoSize}
              />
            </a>
            <ul>
              <li className="nav__list-item">
                <a href="#Home">Home</a>
              </li>
              <li className="nav__list-item">
                <a href="#OurServices">Our Services</a>
              </li>
              <li className="nav__list-item">
                <a href="#About">About</a>
              </li>
              <li className="nav__list-item">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </Fade>
        </Container>
      </nav>
    </>
  );
};
