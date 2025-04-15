// src/components/Projects/Projects.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = styled.section`
  background-color: var(--light-color);
`;

const ProjectsFilter = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 8px 20px;
  background-color: ${({ active }) => (active ? 'var(--primary-color)' : '#f1f1f1')};
  color: ${({ active }) => (active ? 'white' : 'var(--dark-color)')};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? 'var(--primary-color)' : '#e1e1e1')};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ darkMode }) => (darkMode ? '#2d3748' : 'white')};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid ${({ darkMode }) => (darkMode ? '#4a5568' : '#e2e8f0')};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.7)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  ${ProjectCard}:hover &::before {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProjectCard}:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;

  h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--dark-color);
  }

  p {
    color: var(--gray-color);
    margin-bottom: 15px;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;

  span {
    background-color: ${({ darkMode }) => (darkMode ? '#4a5568' : '#f1f1f1')};
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    color: var(--dark-color);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--dark-color);
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary-color);
      transform: translateY(-2px);
    }

    svg {
      font-size: 1.2rem;
    }
  }
`;

const ProjectHoverContent = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 2;
  color: white;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  h3 {
    color: white;
    margin-bottom: 10px;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
`;

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Friend contact list application',
      description: 'A full-featured app with user adding,updating and deleting functionality and also have a feature to add friends to the list.',
      detailedDescription: 'Built with React, Node.js, and Features include user authentication.',
      tags: ['React', 'Node.js', ],
      category: 'Full Stack',
      image: 'src/components/Projects/contactlist.jpg',
      github: 'https://github.com/DayaShankar215/React-Project',
      live: 'https://snapbases.web.app/',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and styled-components.',
      detailedDescription: 'Modern portfolio with animations, responsive design, and contact form. Built with React, Framer Motion, and Styled Components.',
      tags: ['React', 'Styled Components', 'Framer Motion'],
      category: 'Frontend',
      image: 'src/components/Projects/Portfolio.png',
      github: 'https://github.com/DayaShankar215/information',
      live: 'http://dayashankaradhikari.com.np/',
    },

  ];

  const filters = ['All', 'Frontend', 'Full Stack'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsSection id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <ProjectsFilter>
          {filters.map((filter, index) => (
            <FilterButton
              key={index}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </FilterButton>
          ))}
        </ProjectsFilter>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
                <ProjectHoverContent>
                  <h3>{project.title}</h3>
                  <p>{project.detailedDescription}</p>
                </ProjectHoverContent>
              </ProjectImage>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <motion.span 
                      key={index}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </div>
    </ProjectsSection>
  );
}

export default Projects;