import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Title>Ryan's Portfolio</Title>

      <Projects>
        <Subtitle>Projects</Subtitle>

        <ProjectCard>
          <ProjectTitle>Website Clone</ProjectTitle>
          <ProjectDescription>
            This was the first project I worked on at Code Nation and my first
            attmept coding with HTML. The objective was to pick a site and make
            a copy that resembled the site as close as we could.
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
            This is a simple app that displays the key information of whatever
            key the user presses.
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
            This is a simple calculator app.
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
            alt="Calculater App"
            target="_blank"
          >
            View on Netify
          </ProjectLink>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Drumkit Challange</ProjectTitle>
          <ProjectDescription>
            This app is a 'Drum Kit' soundboard that plays a specific sound when
            the user presses the corosponding key. It works in the same way as
            the 'Keycode Generator' shown before, in that it runs a function
            when a specific key is pressed.
          </ProjectDescription>
          <ProjectLink
            href="https://github.com/LastGreenseer/Drumkit_Challenge"
            alt="Drumkit Challange"
            target="_blank"
          >
            View on Github
          </ProjectLink>
          <ProjectLink
            href="https://drumkitchallenge-rc.netlify.app/"
            alt="Drumkit Challange"
            target="_blank"
          >
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
  color: #ffffff;
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
