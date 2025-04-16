// src/components/Hero/Hero.jsx
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;

  span {
    color: #ffd700;
  }

  @media (max-width: 992px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  margin-bottom: 15px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  a {
    color: white;
    font-size: 1.5rem;
    transition: all 0.3s ease;

    &:hover {
      color: #ffd700;
      transform: translateY(-3px);
    }
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

function Hero() {
  return (
    <HeroSection id="home">
      <div className="container">
        <HeroContent>
          <HeroText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HeroTitle>
                Hi, I'm <span>Daya Shankar Adhikari</span>
              </HeroTitle>
              <HeroSubtitle>
                A passionate frontend developer creating beautiful, responsive websites with modern
                technologies.
              </HeroSubtitle>
            </motion.div>

            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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

            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#contact" className="btn">
                Contact Me
              </a>
              <a href="#projects" className="btn" style={{ background: 'transparent', border: '2px solid white' }}>
                View Work
              </a>
            </ButtonGroup>
          </HeroText>

          <HeroImage>
            <motion.img
              src="src\assets\images\daya1.jpg" // Replace with your image
              alt="Daya.img"
              style={{ width: '300px', height: '500px' }} // Set width and height
              whileInView={{ scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </HeroImage>
        </HeroContent>
      </div>
    </HeroSection>
  );
}

export default Hero;