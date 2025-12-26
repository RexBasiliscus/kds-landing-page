import { useEffect } from "react";
import { useLocation } from "react-router";
import { scrollToHash } from "../utils/scrollToHash";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import WhyChooseUs from "../components/WhyChooseUs";
import EnvironmentSection from "../components/EnvironmentSection";
import ClientsSection from "../components/ClientsSection";
import { clientLogos } from "../data/clientLogos";
import { cardsData } from "../data/cardsData";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) scrollToHash(location.hash);
  }, [location]);

  return (
    <>
      <Hero />
      <Cards cardsData={[cardsData[0], cardsData[1]]} />
      <WhyChooseUs />
      {/* Environment responsibility section */}
      <EnvironmentSection />
      {/* Clients / Logos section */}
      <ClientsSection logos={clientLogos} />
    </>
  );
};

export default Home;
