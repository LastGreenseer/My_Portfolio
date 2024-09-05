import styled from "styled-components";

const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;

const ContactMe = () => {
  return (
    <Container>
      <Title>Contact Me</Title>
      <p>Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
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

export default ContactMe;
