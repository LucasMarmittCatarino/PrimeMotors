import FeaturedOffers from "~/components/FeaturedOffers";
import {
  Container,
} from "./styles";
import WelcomeVideo from "~/components/WelcomeVideo";
import PartnerCompanies from "~/components/PartnerCompanies";

function Home() {
  return (
    <Container>
      <WelcomeVideo />
      <FeaturedOffers />
      <PartnerCompanies />
    </Container>
  );
}

export default Home;
