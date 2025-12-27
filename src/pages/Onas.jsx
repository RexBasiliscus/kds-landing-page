import { useEffect } from "react";
import { useLocation } from "react-router";
import { scrollToHash } from "../utils/scrollToHash";
import Hero from "../components/Hero";
import AboutUsCards from "../components/AboutUsCards";
import WhyChooseUs from "../components/WhyChooseUs";
import ilustracija from "../assets/ilustracija.svg";

const Onas = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) scrollToHash(location.hash);
  }, [location]);

  return (
    <>
      <Hero
        subheading="O nas"
        description="Čistoča in urejenost, na katero se lahko zanesete."
        alignCenter
        ilustracija={{
          src: ilustracija,
          alt: "O nas ilustracija",
        }}
      />

      <AboutUsCards />

      {/* Why Choose Us Section */}
      <WhyChooseUs
        hideButton={true}
        className="pb-12"
      />
    </>
  );
};

export default Onas;
