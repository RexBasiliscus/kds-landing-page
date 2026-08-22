import Hero from "../components/Hero";
import ilustracija from "../assets/ilustracija.svg";

const PolitikaZasebnosti = () => {
  return (
    <>
      <Hero
        alignCenter
        ilustracija={{
          src: ilustracija,
          alt: "Politika zasebnosti",
        }}
      />

      <section className="container relative z-10 mx-auto -mt-4 px-6 pb-12 sm:-mt-10 md:-mt-8 lg:-mt-12">
        <article className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-xl sm:p-6 md:p-8 lg:p-10">
          <h1 className="mb-6 text-center font-highlight text-xl font-bold text-primary sm:text-2xl md:text-3xl">
            Politika zasebnosti
          </h1>

          <div className="space-y-8 font-primary text-sm leading-relaxed text-black md:text-base">
            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                1. Upravljavec osebnih podatkov
              </h2>
              <p>
                Upravljavec osebnih podatkov je: KD STORITVE, družba za
                upravljanje, vzdrževanje in čiščenje objektov, d.o.o. s sedežem
                na naslovu Litijska cesta 184a, 1261 Ljubljana-Dobrunje.
              </p>
              <div className="mt-3 space-y-1">
                <p>Matična številka: 8789495000</p>
                <p>Davčna številka: SI97440957</p>
                <p>E-pošta: info@kdstoritve.si</p>
                <p>Telefon: 051 665 151</p>
              </div>
              <p className="mt-3">(v nadaljevanju: »upravljavec«).</p>
            </section>

            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                2. Namen politike zasebnosti
              </h2>
              <p>
                Ta politika zasebnosti pojasnjuje, kako upravljavec zbira,
                uporablja, hrani in varuje osebne podatke obiskovalcev spletne
                strani www.kdstoritve.si ter posameznikov, ki z upravljavcem
                stopijo v stik.
              </p>
              <p className="mt-3">
                Obdelava osebnih podatkov poteka skladno z določbami UREDBE (EU)
                2016/679 EVROPSKEGA PARLAMENTA IN SVETA z dne 27. aprila 2016 o
                varstvu posameznikov pri obdelavi osebnih podatkov in o prostem
                pretoku takih podatkov ter o razveljavitvi Direktive 95/46/ES
                (Splošna uredba o varstvu podatkov; v nadaljevanju: GDPR),
                Zakona o varstvu osebnih podatkov (Uradni list RS, št. 163/2022
                in nasl.; v nadaljevanju: ZVOP-2) in druge veljavne zakonodaje.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                3. Katere osebne podatke obdelujemo
              </h2>
              <p>Upravljavec lahko obdeluje naslednje osebne podatke:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>ime in priimek;</li>
                <li>elektronski naslov;</li>
                <li>telefonsko številko;</li>
                <li>podatke, posredovane prek kontaktnega obrazca;</li>
                <li>podatke o komunikaciji;</li>
                <li>IP naslov;</li>
                <li>tehnične podatke o uporabi spletne strani;</li>
                <li>podatke, pridobljene prek piškotkov.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                4. Nameni in pravne podlage obdelave
              </h2>
              <p>Osebne podatke obdelujemo za naslednje namene:</p>
              <div className="mt-3 space-y-4">
                <div>
                  <h3 className="font-bold">Izvajanje komunikacije</h3>
                  <p>
                    Pravna podlaga: člen 6(1)(b) GDPR – izvajanje ukrepov na
                    zahtevo posameznika pred sklenitvijo pogodbe.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">
                    Izpolnjevanje zakonskih obveznosti
                  </h3>
                  <p>Pravna podlaga: člen 6(1)(c) GDPR.</p>
                </div>
                <div>
                  <h3 className="font-bold">
                    Zagotavljanje delovanja spletne strani
                  </h3>
                  <p>
                    Pravna podlaga: člen 6(1)(f) GDPR – zakoniti interes
                    upravljavca.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">
                    Analitika in izboljšanje uporabniške izkušnje
                  </h3>
                  <p>
                    Pravna podlaga: privolitev posameznika v skladu s členom
                    6(1)(a) GDPR.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold">
                    Pošiljanje obvestil in tržnih sporočil
                  </h3>
                  <p>Pravna podlaga: privolitev posameznika.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                5. Posredovanje osebnih podatkov
              </h2>
              <p>Podatke lahko posredujemo:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>ponudnikom gostovanja spletne strani;</li>
                <li>ponudnikom IT storitev;</li>
                <li>ponudnikom e-poštnih storitev;</li>
                <li>pogodbenim obdelovalcem;</li>
                <li>državnim organom, kadar to zahteva zakon.</li>
              </ul>
              <p className="mt-3">
                Vsi pogodbeni obdelovalci podatke obdelujejo izključno v skladu
                z navodili upravljavca.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                6. Prenosi podatkov v tretje države
              </h2>
              <p>
                Če pri uporabi posameznih storitev pride do prenosa podatkov
                izven Evropskega gospodarskega prostora, se tak prenos izvede le
                ob ustreznih zaščitnih ukrepih, določenih v GDPR.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                7. Obdobje hrambe
              </h2>
              <p>
                Osebne podatke hranimo le toliko časa, kolikor je potrebno za
                dosego namenov obdelave oziroma toliko časa, kot to določajo
                predpisi.
              </p>
              <p className="mt-3">
                Podatki iz kontaktnih obrazcev se hranijo do zaključka
                komunikacije oziroma največ 12 mesecev, razen če obstaja druga
                pravna podlaga za daljšo hrambo.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                8. Pravice posameznika
              </h2>
              <p>Posameznik ima pravico:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>do dostopa do osebnih podatkov;</li>
                <li>do popravka netočnih podatkov;</li>
                <li>do izbrisa podatkov;</li>
                <li>do omejitve obdelave;</li>
                <li>do ugovora obdelavi;</li>
                <li>do prenosljivosti podatkov;</li>
                <li>do preklica privolitve.</li>
              </ul>
              <p className="mt-3">
                Zahtevo lahko posameznik pošlje na zgoraj naveden elektronski
                naslov upravljavca.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                9. Pravica do pritožbe
              </h2>
              <p>
                Če posameznik meni, da se njegovi osebni podatki obdelujejo v
                nasprotju z zakonodajo, lahko vloži pritožbo pri:
              </p>
              <address className="mt-3 not-italic">
                Informacijski pooblaščenec Republike Slovenije
                <br />
                Dunajska cesta 22
                <br />
                1000 Ljubljana
                <br />
                Slovenija
              </address>
            </section>

            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                10. Varnost podatkov
              </h2>
              <p>
                Upravljavec izvaja ustrezne organizacijske in tehnične ukrepe za
                zaščito osebnih podatkov pred nepooblaščenim dostopom, izgubo,
                zlorabo ali razkritjem.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-highlight text-lg font-bold text-primary md:text-xl">
                11. Spremembe politike
              </h2>
              <p>
                Upravljavec si pridržuje pravico do spremembe te politike
                zasebnosti. Veljavna različica je vedno objavljena na spletni
                strani.
              </p>
            </section>
          </div>
        </article>
      </section>
    </>
  );
};

export default PolitikaZasebnosti;
