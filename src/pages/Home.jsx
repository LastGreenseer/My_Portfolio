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

                  {/* <ProjectLink href="" target="_blank">
                    View on Netify
                  </ProjectLink> */}
                </ProjectLinks>
              </ProjectInfo>
              <ProjectImage
                src="src\Images\website-clone-rc.png"
                alt="Website Clone"
              />
            </ProjectCard>

            <ProjectCard>
              <ProjectInfo>
                <ProjectTitle>Keycode Challange</ProjectTitle>
                <ProjectDescription>
                  This is a simple app that displays the key information of
                  whatever key the user presses.
                </ProjectDescription>
                <ProjectLinks>
                  <ProjectLink
                    href="https://github.com/LastGreenseer/Keycode_challange"
                    alt="Keycode Challange"
                    target="_blank"
                  >
                    View on GitHub
                  </ProjectLink>
                </ProjectLinks>
              </ProjectInfo>
              <ProjectImage src="src\Images\keycode-generator-rc.png" />
            </ProjectCard>

            <ProjectCard>
              <ProjectInfo>
                <ProjectTitle>Calculater App</ProjectTitle>
                <ProjectDescription>
                  This is a simple calculator app.
                </ProjectDescription>
                <ProjectLinks>
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
                </ProjectLinks>
              </ProjectInfo>
              <ProjectImage
                src="src\Images\calculater-rc.png"
                alt="Calculater Screenshot"
              />
            </ProjectCard>

            <ProjectCard>
              <ProjectInfo>
                <ProjectTitle>Drumkit Challange</ProjectTitle>

                <ProjectDescription>
                  This app is a 'Drum Kit' soundboard that plays a specific
                  sound when the user presses the corosponding key. It works in
                  the same way as the 'Keycode Generator' shown before, in that
                  it runs a function when a specific key is pressed.
                </ProjectDescription>
                <ProjectLinks>
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
                </ProjectLinks>
              </ProjectInfo>
              <ProjectImage
                src="src\Images\drumkit-rc.png"
                alt="Drumkit Screenshot"
              />
            </ProjectCard>

            <ProjectCard>
              <ProjectInfo>
                <ProjectTitle>To Do List</ProjectTitle>

                <ProjectDescription>
                  This is a 'To-Do List' app where users can add a task to the
                  to-do board and mark the task as done once the task is
                  complete. Using CSS, I have made the tasks resemble
                  stick-notes on a bulleton board.
                </ProjectDescription>
                <ProjectLinks>
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
                </ProjectLinks>
              </ProjectInfo>
              <ProjectImage
                src="src\Images\to-do-list-rc.png"
                alt="to-do List Screenshot"
              />
            </ProjectCard>

            <ProjectCard>
              <ProjectInfo>
                <ProjectTitle>Cats4lyf</ProjectTitle>

                <ProjectDescription>
                  This was one of my first projects working in a group, as such
                  I learned much about working as part of a team aswell as
                  coding. We learned how to plan and assign tasks using Trello,
                  how to communicate effectivly as a team and the importance of
                  Git pull requests and merging branches when working with
                  others
                </ProjectDescription>
                <ProjectLinks>
                  <ProjectLink
                    href="https://github.com/LastGreenseer/Cats4lyf"
                    alt="Cats4lyf Github"
                    target="_blank"
                  >
                    View on Github
                  </ProjectLink>
                  <ProjectLink
                    href="https://cats4lyf-ryan.netlify.app/"
                    alt="Cats4lyf Netlify"
                    target="_blank"
                  >
                    View on Netify
                  </ProjectLink>
                </ProjectLinks>
              </ProjectInfo>
              <ProjectImage
                src="src\Images\Cats4lyf.png"
                alt="Cats4lyf Screenshot"
              />
            </ProjectCard>

            <ProjectCard>
              <ProjectInfo>
                <ProjectTitle>InstClone</ProjectTitle>

                <ProjectDescription>
                  This was the first project in which I worked on both a
                  front-end and a back-end. The back-end is the server side of
                  the application and handles the CRUD operators. The front-end
                  handles everything the user sees.{" "}
                </ProjectDescription>
                <ProjectLinks>
                  <ProjectLink
                    href="https://github.com/LastGreenseer/M55_instaclone_FE"
                    alt="InstaClone Github"
                    target="_blank"
                  >
                    View on Github
                  </ProjectLink>
                  {/* <ProjectLink href="" alt="InstaClone Netlify" target="_blank">
                    View on Netify
                  </ProjectLink> */}
                </ProjectLinks>
              </ProjectInfo>
              <ProjectImage
                src="src\Images\instaClone2.png"
                alt="InstaClone Screenshot"
              />
            </ProjectCard>

            <ProjectCard>
              <ProjectInfo>
                <ProjectTitle>Character Vault</ProjectTitle>

                <ProjectDescription>
                  This was the final project I worked on in my bootcamp. It was
                  a group project, and our group had decided to make an app
                  where users can store information about characters they have
                  made in stories the user is writing. Users can create an
                  account, sign in and add characters to the vault which they
                  can then view to bring up all the important information about
                  that character. We also gave a presentation showcasing the app
                  and explaining who it is for.
                </ProjectDescription>
                <ProjectLinks>
                  <ProjectLink
                    href="https://github.com/LastGreenseer/m55_character_vault_FE"
                    alt="Character Vault Front End Link"
                    target="_blank"
                  >
                    View on Github
                  </ProjectLink>
                  <ProjectLink
                    href="https://charactervault.netlify.app/login"
                    alt="Character Vault Netlify Link"
                    target="_blank"
                  >
                    View on Netify
                  </ProjectLink>
                </ProjectLinks>
              </ProjectInfo>
              <ProjectImage
                src="src\Images\Character Vault.png"
                alt="Character Vault Screenshot"
              />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #533564;
  margin: 15px;
  margin-bottom: 20px;
  padding: 10px;
  padding-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding-right: 10px;
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
  width: 200px;
  height: auto;
  border-radius: 4px;
  margin-left: 10px;
  margin-right: 10px;
`;

export default Home;
