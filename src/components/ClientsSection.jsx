import React from "react";

const ClientsSection = ({ logos = [] }) => {
  return (
    <section className="max-w-6xl mx-auto mb-16 px-6 py-12">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
        {/* Left copy */}
        <div className="flex-1 max-w-xl">
          <h3 className="text-3xl md:text-3xl font-extrabold font-highlight leading-tight mb-4">
            <span className="text-secondary">Kaj pravijo naše</span>
            <br />
            <span className="text-primary">zadovoljne stranke</span>
          </h3>
          <p className="text-sm md:text-base text-black font-primary font-medium leading-tight">
            Postanite del naše skupnosti zadovoljnih strank in izkusite vrhunske
            storitve čiščenja in vzdrževanja objektov.
          </p>
        </div>

        {/* Right logos grid */}
        <div className="flex-1 w-full">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-8 md:justify-between">
            {logos.map((logo, i) => (
              <div
                key={i}
                className="h-12 md:h-14 flex items-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt || `client-${i}`}
                  className="h-full w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
