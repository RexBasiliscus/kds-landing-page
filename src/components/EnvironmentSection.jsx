import React from "react";
import plantImg from "../assets/rozca+roka.png";

const EnvironmentSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-4">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={plantImg}
            alt="Zelena rastlina"
            className="w-full max-w-md md:max-w-lg object-contain drop-shadow-md"
          />
        </div>

        {/* Text content */}
        <div className="flex-1">
          <h3 className="text-3xl md:text-3xl font-extrabold font-highlight text-secondary leading-tight mb-4">
            Čutimo odgovornost do
            <br /> <span className="text-primary">našega okolja</span>
          </h3>
          <p className="text-sm font-medium md:text-base text-black font-primary leading-tight mb-6">
            Zavezani smo k varovanju okolja. Uporabljamo okolju prijazna čistila
            in metode, ki so varne za naravo in ljudi. Naš cilj je zmanjšati
            okoljski odtis našega delovanja, hkrati pa zagotoviti najvišjo raven
            čistoče.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentSection;
