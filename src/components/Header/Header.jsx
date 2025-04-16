// src/components/Header/Header.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background-color: ${({ scrolled }) => 
    scrolled ? 'rgba(248, 249, 250, 0.95)' : 'transparent'};
  box-shadow: ${({ scrolled }) => (scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const Logo = styled(motion.a)`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ scrolled }) => (scrolled ? 'green' : 'white')};
  text-decoration: none;
  transition: color 0.3s ease;

  span {
    color: green;
  }

  &:hover {
    color: green;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background-color: var(--light-color);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.5s ease;
    z-index: 1000;
  }
`;

const NavLink = styled(motion.li)`
  a {
    color: ${({ scrolled }) => (scrolled ? 'var(--dark-color)' : 'white')};
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;

    @media (max-width: 768px) {
      color: var(--dark-color);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.div`
  display: none;
  z-index: 1001;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    color: ${({ scrolled }) => (scrolled ? 'var(--dark-color)' : 'white')};
    font-size: 1.5rem;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <HeaderContainer scrolled={scrolled} ref={ref}>
      <div className="container">
        <Nav>
          <Logo
            href="#home"
            scrolled={scrolled}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio<span>.</span>
          </Logo>

          <NavLinks isOpen={isOpen}>
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                scrolled={scrolled}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
              >
                <a href={link.href}>{link.name}</a>
              </NavLink>
            ))}
          </NavLinks>

          <NavActions>
            <MobileMenuButton scrolled={scrolled} onClick={toggleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </MobileMenuButton>
          </NavActions>
        </Nav>
      </div>
    </HeaderContainer>
  );
}

export default Header;
