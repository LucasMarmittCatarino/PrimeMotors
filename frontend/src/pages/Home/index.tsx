import FeaturedOffers from "~/components/FeaturedOffers";
import {
  Container,
} from "./styles";
import WelcomeVideo from "~/components/WelcomeVideo";
import PartnerCompanies from "~/components/PartnerCompanies";
import AdminHomeInfo from "~/components/AdminHomeInfo/AdminHomeInfo";
import { useAuth } from "~/hooks/useAuth";

function Home() {
  const { user } = useAuth();

  return (
    <Container>
      {user?.role === "admin" && <AdminHomeInfo />}
      <WelcomeVideo />
      <FeaturedOffers />
      <PartnerCompanies />
    </Container>
  );
}

export default Home;
