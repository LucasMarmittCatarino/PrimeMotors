import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

function Home() {
  return (
    <Container>
      <h1>🚗 LuxDrive</h1>
      <p>Bem-vindo ao marketplace de carros de luxo.</p>
    </Container>
  );
}

export default Home;
