import { useLocation } from "react-router";
import ciscenjeBckgrImage from "../assets/ciscenje-bckgr-hero.png";
import ciscenjeImage from "../assets/ciscenje-hero.png";
import vzdrzhevBckgrImage from "../assets/vzdrzevanje-bckgr-hero.png";
import vzdrzhevImage from "../assets/vzdrzevanje-hero.png";

const SharedHero = () => {
  const location = useLocation();

  const heroConfig = {
    "/ciscenje": {
      title: "Čiščenje",
      titleEnd: "objektov",
      description: `V KD Storitve nudimo profesionalne čistilne storitve za vse tipe objektov, strokovno in zanesljivo, s poudarkom na čistem, prijetnem in varnem okolju ter uporabi kakovostnih sredstev za trajno svežino.`,
      highlightText: "profesionalne čistilne storitve za vse tipe objektov",
      bckgrImage: ciscenjeBckgrImage,
      heroImage: ciscenjeImage,
      altText: "Čiščenje objektov",
    },
    "/vzdrzevanje": {
      title: "Vzdrževanje",
      titleEnd: "objektov",
      description: `V KD Storitve poskrbimo, da vaši poslovni in zasebni objekti delujejo brezhibno. Naše storitve vzdrževanja zagotavljajo varno, udobno in funkcionalno okolje ter podaljšujejo življenjsko dobo prostorov.`,
      highlightText:
        "Naše storitve vzdrževanja zagotavljajo varno, udobno in funkcionalno okolje",
      bckgrImage: vzdrzhevBckgrImage,
      heroImage: vzdrzhevImage,
      altText: "Vzdrževanje objektov",
    },
  };

  const config = heroConfig[location.pathname] || heroConfig["/ciscenje"];

  return (
    <section
      className="relative min-h-[40vh] sm:min-h-[45vh] md:min-h-[55vh] lg:min-h-[65vh] -mt-16 pt-16 pb-0"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(6,144,128,0.85) 15%, rgba(6,144,128,0.65) 30%, rgba(7,151,137,0.35) 45%, rgba(7,151,137,0) 60%), url(${config.bckgrImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container */}
      <div className="absolute inset-0 flex items-end md:items-end">
        <div className="container mx-auto px-6 w-full pb-2 md:pb-6 lg:pb-8">
          <div className="flex flex-row items-start gap-4 md:gap-12">
            {/* Left Side - Image */}
            <div className="w-1/2  flex justify-center items-end">
              <div className="relative z-10 -mb-12 md:-mb-20 lg:-mb-24">
                <img
                  src={config.heroImage}
                  alt={config.altText}
                  className="w-56 h-56 sm:w-[14rem] sm:h-[18rem] md:w-[20rem] md:h-[28rem] lg:w-[24rem] lg:h-[34rem] object-cover rounded-3xl shadow-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="w-1/2 flex items-start">
              <div className=" text-white">
                <h1 className="text-base sm:text-base md:text-5xl lg:text-5xl font-highlight font-bold">
                  <span className="text-secondary">{config.title} </span>
                  {config.titleEnd}
                </h1>
                <p className="text-[10px] sm:text-base md:text-xl lg:text-3xl font-primary font-medium mt-2 md:mt-8 lg:mt-16">
                  {config.description
                    .split(config.highlightText)
                    .map((part, index) => (
                      <span key={index}>
                        {part}
                        {index === 0 && (
                          <span className="text-secondary">
                            {config.highlightText}
                          </span>
                        )}
                      </span>
                    ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SharedHero;
