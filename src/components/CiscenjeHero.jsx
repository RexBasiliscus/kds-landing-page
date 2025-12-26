import herobckgrImage from "../assets/ciscenje-bckgr-hero.png";
import heroImage from "../assets/ciscenje-hero.png";

const CiscenjeHero = () => {
  return (
    <section
      className="relative min-h-[40vh] sm:min-h-[45vh] md:min-h-[55vh] lg:min-h-[60vh] -mt-16 pt-16 pb-0"
      style={{
        /* tuned multi-stop gradient to better match the provided design */
        backgroundImage: `linear-gradient(180deg, rgba(6,144,128,0.85) 15%, rgba(6,144,128,0.65) 30%, rgba(7,151,137,0.35) 45%, rgba(7,151,137,0) 60%), url(${herobckgrImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container */}
      <div className="absolute inset-0 flex items-end md:items-end">
        <div className="container mx-auto px-6 w-full pb-0">
          <div className="flex flex-row items-start gap-4 md:gap-12">
            {/* Left Side - Image */}
            <div className="w-1/2 md:w-1/2 flex justify-center items-end">
              <div className="relative z-10 -mb-12 md:-mb-20 lg:-mb-32">
                <img
                  src={heroImage}
                  alt="Čiščenje objektov"
                  className="w-40 h-52 sm:w-[16rem] sm:h-[20rem] md:w-[20rem] md:h-[28rem] lg:w-[30rem] lg:h-[36rem] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="w-1/2 md:w-1/2 flex items-start">
              <div className="text-left text-white font-semibold">
                <h1 className="hero-heading text-base sm:text-2xl md:text-5xl lg:text-6xl font-highlight font-bold">
                  <span className="text-secondary">Čiščenje </span>
                  objektov
                </h1>
                <p className="text-[11px] sm:text-base md:text-xl lg:text-3xl font-primary font-medium mt-2 md:mt-8 lg:mt-16">
                  V KD Storitve nudimo{" "}
                  <span className="text-secondary">
                    profesionalne čistilne storitve za vse tipe objektov
                  </span>
                  , strokovno in zanesljivo, s poudarkom na čistem, prijetnem in
                  varnem okolju ter uporabi kakovostnih sredstev za trajno
                  svežino.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CiscenjeHero;
