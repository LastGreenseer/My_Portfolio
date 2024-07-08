import styled from "styled-components";

const AboutMe = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Projects>
        <Title>Projects</Title>
        <ProjectCard>
          <ProjectTitle>Keycode Challange</ProjectTitle>
          <ProjectDescription>
            A keycode Genrator that displays the information of whatever key is
            pressed
          </ProjectDescription>
          <ProjectLink
            href="https://github.com/LastGreenseer/Keycode_challange"
            target="_blank"
          >
            View on GitHub
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Calculater App</ProjectTitle>
          <ProjectDescription>
            A basic, functioning calculater
          </ProjectDescription>
          <ProjectLink
            href="https://github.com/LastGreenseer/Calculator-App"
            target="_blank"
          >
            View on Github
          </ProjectLink>
          <ProjectLink
            href="https://calculater-rc.netlify.app/"
            target="_blank"
          >
            View on Netify
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>title3</ProjectTitle>
          <ProjectDescription>description here</ProjectDescription>
          <ProjectLink href="" target="_blank">
            View on Github
          </ProjectLink>
          <ProjectLink href="" target="_blank"
          >
            View on Netify
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>title4</ProjectTitle>
          <ProjectDescription>description here</ProjectDescription>
          <ProjectLink href="" target="_blank"
          >
            View on Github
          </ProjectLink>
          <ProjectLink href="" target="_blank">
            View on Netify
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>title5</ProjectTitle>
          <ProjectDescription>description here</ProjectDescription>
          <ProjectLink href="" target="_blank"
          >
            View on Github
          </ProjectLink>
          <ProjectLink href="" target="_blank"
          >
            View on Netify
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

const ProjectTitle = styled.h3`
  color: #333;
`;

const ProjectDescription = styled.p``;

const ProjectLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin: 5px;
  margin-left: 5px;
  margin-right: 30px;

  &:hover {
    text-decoration: underline;
  }
`;

export default AboutMe;
