import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Title>My Portfolio</Title>
      <Projects>
        <Subtitle>Projects</Subtitle>

        <ProjectCard>
          <ProjectTitle>Website Clone</ProjectTitle>
          <ProjectDescription>
            My first ever attempt at making a webpage with HTML and CSS after
            first week of learning coding
          </ProjectDescription>
          <ProjectLink
            href="https://github.com/LastGreenseer/CN-Website-Clone"
            alt="Marvel Website Clone"
            target="_blank"
          >
            View on Github
          </ProjectLink>
          <ProjectLink href="" target="_blank">
            View on Netify
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Keycode Challange</ProjectTitle>
          <ProjectDescription>
            A keycode Genrator that displays the information of whatever key is
            pressed
          </ProjectDescription>
          <ProjectLink
            href="https://github.com/LastGreenseer/Keycode_challange"
            alt="Keycode Challange"
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
            alt="Calculater App"
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
          <ProjectLink href="" target="_blank">
            View on Netify
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>title5</ProjectTitle>
          <ProjectDescription>description here</ProjectDescription>
          <ProjectLink href="" target="_blank">
            View on Github
          </ProjectLink>
          <ProjectLink href="" target="_blank">
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

const Subtitle = styled.h2`
  color: white;
  text-align: center;
`;

const Projects = styled.div`
  border-style: solid;
  background-color: #4b4848;
  border-color: black;
`;

const ProjectCard = styled.div`
  margin-bottom: 2px;
  padding: 1px;
  border: 1px solid black;
  border-radius: 4px;
`;

const ProjectTitle = styled.h3`
  color: white;
  font-family: "Arial Narrow Bold", sans-serif;
  margin-left: 5px;
`;

const ProjectDescription = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  margin-left: 5px;
`;

const ProjectLink = styled.a`
  color: #2fcfff;
  text-decoration: none;
  margin: 5px;
  margin-left: 5px;
  margin-right: 30px;

  &:hover {
    color: #9e0707;
  }
`;

export default Home;
