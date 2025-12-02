import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Features from "./components/Features";
import C2AButton from "./components/C2AButton";
import EnvironmentSection from "./components/EnvironmentSection";
import ClientsSection from "./components/ClientsSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { cardsData } from "./data/cardsData";
import { testimonialsData } from "./data/testimonialsData";
import { clientLogos } from "./data/clientLogos";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Cards cardsData={[cardsData[0], cardsData[1]]} />
      {/* Section header below cards */}
      <div className="text-center mt-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
          Zakaj izbrati <span className="text-primary">prav nas?</span>
        </h2>
        <p className="mt-3 text-black font-semibold max-w-2xl mx-auto">
          zavezujemo se k zagotavljanju vrhunskih storitev vzdrževanja in
          čiščenja objektov
        </p>
      </div>
      <Features cardsData={[cardsData[2], cardsData[3], cardsData[4]]} />

      <div className="flex justify-center mt-10 mb-10">
        <C2AButton
          btnText="Poizvej več o nas"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 pt-2 text-base md:text-lg font-semibold w-60 md:w-60 text-center"
        />
      </div>

      {/* Environment responsibility section */}
      <EnvironmentSection />

      {/* Clients / Logos section */}
      <ClientsSection logos={clientLogos} />

      {/* Combined illustration + testimonials section */}
      <TestimonialsCarousel testimonials={testimonialsData} />

      {/* Contact form section */}
      <Form />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
