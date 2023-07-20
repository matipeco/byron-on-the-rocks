import { useState, useEffect } from 'react';
import { Container } from '../Container';
import logo from "../../assets/logo-black.svg"
import './style.scss';

export const NavBar = () => {
  const [logoSize, setLogoSize] = useState(160);
  const [scrolledDown, setScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const newLogoSize = scrollTop <= 60 ? 160 : 90;
      setLogoSize(newLogoSize);
      setScrolledDown(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolledDown ? 'scrolled' : ''}>
      <Container>
        <img
          className="logo"
          src={logo}
          alt="logo"
          width={logoSize}
          height={logoSize}
        />
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#OurServices">Our Services</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </Container>
    </nav>
  );
}
