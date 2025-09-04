import FeaturedOffers from "~/components/FeaturedOffers";
import {
  Container,
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
