const Features = ({ cardsData }) => {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {cardsData &&
          cardsData.map((card, idx) => (
            <div
              key={idx}
              className="flex-1 flex flex-col items-center text-center px-4"
            >
              {card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 h-20 mb-4 object-contain"
                />
              )}

              <h4 className="text-lg md:text-xl font-bold text-primary mb-2">
                {card.title}
              </h4>

              {card.description && (
                <p className="text-sm font-semibold text-black max-w-xs">
                  {card.description}
                </p>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Features;
