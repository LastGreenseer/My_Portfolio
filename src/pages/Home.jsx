import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Title>My Portfolio</Title>
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

export default Home;
