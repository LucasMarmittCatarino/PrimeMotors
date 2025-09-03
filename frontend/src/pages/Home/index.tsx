// Home.tsx
import {
  Container,
  FeaturedOffers,
} from "./styles";
import WelcomeVideo from "~/components/WelcomeVideo";

function Home() {
  return (
    <Container>
      <WelcomeVideo />
      <FeaturedOffers/>
    </Container>
  );
}

export default Home;
