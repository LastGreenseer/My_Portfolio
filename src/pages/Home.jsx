import React, { useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [showProjects, setShowProjects] = useState(true);

  const toggleProjects = () => {
    setShowProjects((prevstate) => !prevstate);
  };

  return (
    <Container>
      <Title>Ryan's Portfolio</Title>

      <AboutMe>
        <Subtitle>About Me</Subtitle>
        <Description>
          I first started programming with the Code Nation online bootcamp.
          Before joining the online course in May 2024, I had no prior knowledge
          of codeing with Javascript or any other programming language. Over the
          two month course I learned how to create simple websites using HTML
          and CSS and how to make apps using functions and components in
          Javascript. I found it difficult to grasp at first, and struggled
          slightly in the begining, but over the first few weeks I bagan to
          understand the basics of programming, thanks to the guidance of the
          Code Nation instructors. Over the two months my confidance in
          programming with Javascript grew as I learned how to design simple
          websites and make basic apps. Below I have included some of the
          projects I worked on at my time with Code Nation:
        </Description>
      </AboutMe>

      <Projects>
        <ProjectsSubtitle onClick={toggleProjects} clickable>
          Projects
        </ProjectsSubtitle>

        {showProjects && (
          <>
            <ProjectCard>
              <ProjectInfo>
                <ProjectTitle>Website Clone</ProjectTitle>

                <ProjectDescription>
                  This was the first project I worked on at Code Nation and my
                  first attmept coding with HTML. The objective was to pick a
                  site and make a copy that resembled the site as close as we
                  could.
                </ProjectDescription>
                <ProjectLinks>
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
                </ProjectLinks>
              </ProjectInfo>
              <ProjectImage src="src\Images\website-clone-rc.png" alt="Website Clone" />
            </ProjectCard>

            <ProjectCard>
              <ProjectTitle>Keycode Challange</ProjectTitle>
              <ProjectDescription>
                This is a simple app that displays the key information of
                whatever key the user presses.
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
                This app is a 'Drum Kit' soundboard that plays a specific sound
                when the user presses the corosponding key. It works in the same
                way as the 'Keycode Generator' shown before, in that it runs a
                function when a specific key is pressed.
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
              <ProjectTitle>To Do List</ProjectTitle>
              <ProjectDescription>
                This is a 'To-Do List' app where users can add a task to the
                to-do board and mark the task as done once the task is complete.
                Using CSS, I have made the tasks resemble stick-notes on a
                bulleton board.
              </ProjectDescription>
              <ProjectLink
                href="https://github.com/LastGreenseer/to-do-list"
                alt="To-Do List"
                target="_blank"
              >
                View on Github
              </ProjectLink>
              <ProjectLink
                href="https://ryans-to-do-list.netlify.app/"
                alt="To-Do List"
                target="_blank"
              >
                View on Netify
              </ProjectLink>
            </ProjectCard>
          </>
        )}
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
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const AboutMe = styled.div`
  border-style: solid;
  border-color: black;
  background-color: #533564;
  width: 75%;
  margin: 0 auto;
`;

const ProjectsSubtitle = styled.h2`
  color: white;
  text-align: center;
  width: 60%;
  padding: 20px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: "Times New Roman", Times, serif;

  &:hover {
    cursor: pointer;
    color: #a01cbb;
    text-decoration: underline;
  }
`;

const Subtitle = styled.h2`
  color: white;
  text-align: center;
  border-bottom: solid gray;
  padding-bottom: 10px;
  font-family: "Times New Roman", Times, serif;
`;

const Description = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  margin-left: 5px;
`;

const Projects = styled.div`
  border-style: solid;
  background-color: #4e4c4c;
  border-color: black;
  width: 75%;
  margin: 0 auto;
  min-height: 100px;
`;

const ProjectCard = styled.div`
  background-color: #533564;
  margin: 15px;
  margin-bottom: 20px;
  padding: 10px;
  padding-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

const ProjectInfo = styled.div`
  max-width: 70%;
`;

const ProjectTitle = styled.h3`
  color: white;
  font-family: "Arial Narrow Bold", sans-serif;
  text-decoration: underline;
  margin-left: 5px;
`;

const ProjectDescription = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-left: 5px;
`;

const ProjectLinks = styled.div`
  margin-left: 5px;
`;

const ProjectLink = styled.a`
  color: #1ec3e0;
  text-decoration: none;
  margin: 5px;
  margin-left: 5px;
  margin-right: 30px;

  &:hover {
    color: #45eff5;
  }
`;

const ProjectImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 4px;
  margin-left: 10px;
`;

export default Home;
