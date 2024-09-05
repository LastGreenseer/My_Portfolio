import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;

const ContactMe = () => {
  return (
    <Container>
      <Title>Contact Me</Title>
      <ContactInfo>
        <MyEmail>
          <FontAwesomeIcon icon={faEnvelope} style={{ marginRight:'10px' }}/>
          Email:{" "}
          <EmailLink href={`mailto:${emailAddress}`}>{emailAddress}</EmailLink>
        </MyEmail>
      </ContactInfo>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  background: linear-gradient(135deg, #1411cc 10%, #bd10a0 100%);
  justify-content: center;
`;

const Title = styled.h1`
  color: #070707;
  text-align: center;
  min-height: 15vh;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const ContactInfo = styled.div``;

const MyEmail = styled.p`
  text-align: center;
  color: white;
  font-size: 25px;
`;

const EmailLink = styled.a`
  color: #1e87e9;
  font-size: 22px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default ContactMe;
