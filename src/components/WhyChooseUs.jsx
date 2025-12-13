import Features from "./Features";
import { cardsData } from "../data/cardsData";
import C2AButton from "./C2AButton";

const WhyChooseUs = ({ className = "" }) => {
  return (
    <section className={className}>
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
          to="/o-nas"
          btnText="Poizvej več o nas"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 pt-2 text-base md:text-lg font-semibold w-60 md:w-60 text-center"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
