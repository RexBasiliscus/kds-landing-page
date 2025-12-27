import { aboutUsData } from "../data/aboutUsData";

const AboutUsCards = () => {
  return (
    <section className="container relative mx-auto px-6 pb-4 sm:pb-4 md:pb-12 lg:pb-12 -mt-4 sm:-mt-10 md:-mt-8 lg:-mt-12 z-10">
      <div className="flex flex-col items-center gap-4 md:gap-10 lg:gap-10 max-w-3xl mx-auto">
        {aboutUsData.map((card, index) => (
          <div
            key={index}
            className="w-full rounded-3xl shadow-xl p-6 sm:p-6 md:p-8 lg:p-10 bg-white"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-highlight font-bold text-primary mb-3 sm:mb-4">
              {card.heading}
            </h2>
            <p className="text-black font-primary font-medium text-xs sm:text-sm md:text-base leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsCards;
