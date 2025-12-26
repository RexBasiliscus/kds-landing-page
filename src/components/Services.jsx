const Services = ({ services = [] }) => {
  return (
    <section className="bg-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:pt-24 md:pt-32 lg:pt-48">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-secondary">Celovit nabor</span>{" "}
          <span className="text-primary">storitev čiščenja</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 md:p-6 sm:h-[285px] md:h-[360px] lg:h-[480px] hover:shadow-lg transition-shadow border-t-4 border-primary flex flex-col gap-3"
            >
              <p className="text-xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="text-sm sm:text-lg md:text-lg lg:text-2xl font-bold text-black mb-3 leading-tight">
                {service.title}
              </h2>
              <p className="text-xs sm:text-base md:text-base lg:text-lg text-gray-700 leading-relaxed flex-1">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
