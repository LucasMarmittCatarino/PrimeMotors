import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

function About() {
  return (
    <Container>
      <h1>ℹ️ Sobre o LuxDrive</h1>
      <p>Plataforma exclusiva para compra e venda de carros de luxo.</p>
    </Container>
  );
}

export default About;
