import { useEffect } from "react";
import { useLocation } from "react-router";
import { scrollToHash } from "../utils/scrollToHash";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import WhyChooseUs from "../components/WhyChooseUs";
import EnvironmentSection from "../components/EnvironmentSection";
import ClientsSection from "../components/ClientsSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { clientLogos } from "../data/clientLogos";
import { cardsData } from "../data/cardsData";
import { testimonialsData } from "../data/testimonialsData";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) scrollToHash(location.hash);
  }, [location]);

  return (
    <>
      <Hero
        heading="Vaša urejenost,"
        subheading="naš ponos."
        description="zanesljivo vzdrževanje in profesionalno čiščenje objektov po vsej Sloveniji."
      />
      <Cards cardsData={[cardsData[0], cardsData[1]]} />
      <WhyChooseUs />
      {/* Environment responsibility section */}
      <EnvironmentSection />
      {/* Clients / Logos section */}
      <ClientsSection logos={clientLogos} />
      <TestimonialsCarousel testimonials={testimonialsData} />
    </>
  );
};

export default Home;
