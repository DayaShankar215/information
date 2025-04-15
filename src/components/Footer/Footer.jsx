
// src/components/Footer/Footer.jsx
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--dark-color);
  color: white;
  padding: 50px 0 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  a {
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary-color);
      transform: translateY(-3px);
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: center;

  a {
    color: rgba(255, 255, 255, 0.7);
    transition: color 0.3s ease;

    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
`;

function Footer() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <SocialLinks>
              <a href="https://github.com/DayaShankar215" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/daya-shankar-adhikari-85236030a/?originalSubdomain=np" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              
              <a href="https://www.facebook.com/share/16FptwPBLf/" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </SocialLinks>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FooterLinks>
              {links.map((link, index) => (
                <a key={index} href={link.href}>
                  {link.name}
                </a>
              ))}
            </FooterLinks>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Copyright>
              &copy; {new Date().getFullYear()} Daya Shankar Adhikari. All rights reserved.
            </Copyright>
          </motion.div>
        </FooterContent>
      </div>
    </FooterContainer>
  );
}

export default Footer;