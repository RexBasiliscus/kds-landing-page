import bckImg from "../assets/bckg-fix.jpg";

const Hero = ({
  heading,
  subheading,
  description,
  alignCenter = false,
  ilustracija = null,
}) => {
  return (
    <section
      className={`relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[70vh] -mt-16 pt-12 sm:pt-16 md:pt-32 lg:pt-40 overflow-hidden ${
        ilustracija ? "-mb-10 flex flex-col" : ""
      }`}
      style={{
        /* tuned multi-stop gradient to better match the provided design */
        backgroundImage: `linear-gradient(180deg, rgba(6,144,128,0.85) 0%, rgba(6,144,128,0.65) 30%, rgba(7,151,137,0.35) 60%, rgba(7,151,137,0) 100%), url(${bckImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Container */}
      <div
        className={`${
          ilustracija
            ? "flex-1 flex items-center"
            : "absolute inset-0 flex items-center"
        }`}
      >
        <div className="container mx-auto px-6 -mb-0 md:-mb-12 sm:-mb-0">
          {/* Text Content */}
          <div
            className={`${!alignCenter ? "ml-auto w-full md:w-1/2" : "w-full"}`}
          >
            <div
              className={`${
                alignCenter ? "text-center" : "text-right"
              } text-white`}
            >
              <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-highlight font-bold">
                {heading}
                {subheading && (
                  <>
                    <br />
                    <span className="text-secondary">{subheading}</span>
                  </>
                )}
              </h1>
              <p className="text-lg md:text-xl font-primary font-medium mt-4">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Ilustracija at the bottom */}
      {ilustracija && (
        <div className="w-full flex justify-center mb-6 sm:mb-6 md:mb-0 lg:-mb-20 px-0 sm:px-6">
          <img
            src={ilustracija.src}
            alt={ilustracija.alt}
            className="w-full h-auto scale-100 sm:scale-100"
            style={ilustracija.style}
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
