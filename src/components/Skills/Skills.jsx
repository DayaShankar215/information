// src/components/Skills/Skills.jsx
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiMysql } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { DiJava, DiMysql } from 'react-icons/di';

const SkillsSection = styled.section`
  background-color: #f9f9f9;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 30px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 20px;
  }
`;

const SkillCard = styled(motion.div)`
  background-color: white;
  padding: 30px 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 3rem;
    margin-bottom: 15px;
    color: var(--primary-color);
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.9rem;
    color: var(--gray-color);
  }
`;

function Skills() {
  const skills = [
    { icon: <FaReact />, name: 'React', level: 'Intermediate' },
    { icon: <FaJs />, name: 'JavaScript', level: 'Intermediate' },
    { icon: <FaPython/>, name: 'Python', level: 'Intermediate' },
    { icon: <FaHtml5 />, name: 'HTML5', level: 'Intermediate' },
    { icon: <SiMysql />, name: 'MySQL', level: 'Advanced' },
    { icon: <FaNodeJs />, name: 'Node.js', level: 'Intermediate' },
    { icon:<DiJava/>, name: 'Java', level: 'Intermediate' },
    { icon: <FaCss3Alt />, name: 'CSS3', level: 'Intermediate' },
    { icon: <FaGitAlt />, name: 'C++', level: 'Intermediate' },
    { icon: <FaGitAlt />, name: 'C', level: 'Intermediate' },
  ];

  return (
    <SkillsSection id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </SkillCard>
          ))}
        </SkillsGrid>
      </div>
    </SkillsSection>
  );
}

export default Skills;