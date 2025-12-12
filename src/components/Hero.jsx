import bckImg from "../assets/bckg-fix.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] -mt-16 pt-16 overflow-hidden"
      style={{
        /* tuned multi-stop gradient to better match the provided design */
        backgroundImage: `linear-gradient(180deg, rgba(6,144,128,0.85) 0%, rgba(6,144,128,0.65) 30%, rgba(7,151,137,0.35) 60%, rgba(7,151,137,0) 100%), url(${bckImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6">
          {/* Text Content - Right Aligned */}
          <div className="ml-auto w-full md:w-1/2">
            <div className="text-right text-white">
              <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-highlight font-bold">
                Vaša urejenost,
                <br />
                naš <span className="text-secondary">ponos.</span>
              </h1>
              <p className="text-lg md:text-xl font-primary mt-4">
                zavezujemo se k zagotavljanju vrhunskih storitev vzdrževanja in
                čiščenja objektov
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
