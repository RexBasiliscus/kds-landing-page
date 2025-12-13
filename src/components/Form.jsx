import C2AButton from "./C2AButton";

const Form = () => {
  return (
    <section
      id="contact"
      className="bg-secondary py-12 px-4"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
            Pošljite povpraševanje
          </h2>
          <p className="text-sm md:text-base text-black font-medium leading-tight mt-4">
            Sporočite nam vaše želje in skupaj jih bomo uresničili.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          {/* Row: two inputs side by side on md+, stacked on small */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col">
              <label className="text-sm font-semibold text-black mb-2">
                Ime in priimek
              </label>
              <input
                type="text"
                className="bg-white rounded-lg px-4 py-3 shadow-sm border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label className="text-sm font-semibold text-black mb-2">
                Email
              </label>
              <input
                type="email"
                className="bg-white rounded-lg px-4 py-3 shadow-sm border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition"
              />
            </div>
          </div>

          {/* Row: textarea full width */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-black mb-2">
              Sporočilo <span className="text-primary">(opcijsko)</span>
            </label>
            <textarea
              rows={6}
              className="bg-white rounded-lg px-4 py-3 shadow-sm border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none transition resize-y"
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center mt-2">
            <C2AButton
              btnText="Pošlji"
              className="w-48 md:w-56 text-center font-semibold py-3 rounded-xl"
            />
          </div>

          {/* Terms text */}
          <p className="text-center text-sm text-black font-medium -mt-2">
            S pošiljanjem se strinjate s{" "}
            <a
              href="#terms"
              className="text-primary"
            >
              splošnimi pogoji
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
};

export default Form;
