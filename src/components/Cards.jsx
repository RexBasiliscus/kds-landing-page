import Card from "./Card";

const Cards = ({ cardsData }) => {
  return (
    <div className="container relative z-20 mx-auto px-4 sm:px-6 -mt-12 flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 md:gap-6 lg:gap-8">
      {cardsData &&
        cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
            linkText={card.linkText}
          />
        ))}
    </div>
  );
};

export default Cards;
