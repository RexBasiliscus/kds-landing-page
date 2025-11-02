const Card = ({ title, image, description, linkText }) => {
  return (
    <div className="bg-secondary shadow-md rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[450px] flex flex-col gap-3 sm:gap-4">
      {/* Title + Image */}
      <div className="flex flex-row items-end justify-between mb-2 sm:mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-highlight font-extrabold text-primary">
          {title}
        </h2>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
          />
        )}
      </div>

      {/* Description text */}
      {description && (
        <p className="text-black font-primary font-medium text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      )}

      {/* Link-like action */}
      {linkText && (
        <div className="flex items-center gap-2 text-primary font-primary text-sm sm:text-base font-semibold cursor-pointer hover:underline">
          <h3>{linkText}</h3>
          <span aria-hidden>→</span>
        </div>
      )}
    </div>
  );
};

export default Card;
