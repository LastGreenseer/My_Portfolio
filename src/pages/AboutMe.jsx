import styled from "styled-components";

const AboutMe = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Projects>
        <Title>Projects</Title>
        <ProjectCard>
          <ProjectTitle>Keycode Challange</ProjectTitle>
          <ProjectDescription>A keycode Genrator that displays the information of whatever key is pressed</ProjectDescription>
          <ProjectLink href="https://github.com/LastGreenseer/Keycode_challange">
            View on GitHub
          </ProjectLink>
        </ProjectCard>
      </Projects>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const Projects = styled.div`
  border-style: solid;
  border-color: black;
`;

const ProjectCard = styled.div`
  margin-bottom: 2px;
  padding: 1px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const ProjectTitle = styled.h2`
  color: #333;
`;

const ProjectDescription = styled.p`
    
`;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default AboutMe;
