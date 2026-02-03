const ContactInfo = () => {
  return (
    <section className="container relative mx-auto px-6 pb-4 sm:pb-4 md:pb-12 lg:pb-12 -mt-4 sm:-mt-10 md:-mt-8 lg:-mt-12 z-10">
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        <div className="w-full rounded-3xl shadow-xl p-6 sm:p-6 md:p-8 lg:p-10 bg-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-highlight text-center font-bold text-primary mb-3 sm:mb-4">
            Podatki o podjetju
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            <div className="flex-1 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-black/60 font-semibold">
                  Naziv podjetja
                </p>
                <p className="text-sm md:text-base font-semibold text-black mt-1">
                  KD STORITVE, družba za opravljanje vzdrževanja in čiščenja
                  objektov, d.o.o.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-black/60 font-semibold">
                  Davčna št.
                </p>
                <p className="text-sm md:text-base font-semibold text-black mt-1">
                  SI 97440957
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-black/60 font-semibold">
                  E-mail
                </p>
                <p className="text-sm md:text-base font-semibold text-black mt-1">
                  info@kdstoritve.si
                </p>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-black/60 font-semibold">
                  Naslov
                </p>
                <p className="text-sm md:text-base font-semibold text-black mt-1">
                  Litijska cesta 184a
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-black/60 font-semibold">
                  Poštna št. in mesto
                </p>
                <p className="text-sm md:text-base font-semibold text-black mt-1">
                  1261 Ljubljana - Dobrunje
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-black/60 font-semibold">
                  Država
                </p>
                <p className="text-sm md:text-base font-semibold text-black mt-1">
                  Slovenija
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
