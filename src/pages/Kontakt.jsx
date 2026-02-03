import { useEffect } from "react";
import { useLocation } from "react-router";
import { scrollToHash } from "../utils/scrollToHash";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import ilustracija from "../assets/ilustracija.svg";
import ContactInfo from "../components/ContactInfo";

const Kontakt = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) scrollToHash(location.hash);
  }, [location]);

  return (
    <>
      <Hero
        subheading="Kontakt"
        description="Stopite v stik z nami"
        alignCenter
        ilustracija={{
          src: ilustracija,
          alt: "O nas ilustracija",
        }}
      />

      <ContactInfo />

      {/* Why Choose Us Section */}
      <WhyChooseUs
        hideButton={true}
        className="pb-12"
      />
    </>
  );
};

export default Kontakt;
