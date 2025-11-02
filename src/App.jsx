import Header from "./components/Header";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Features from "./components/Features";
import C2AButton from "./components/C2AButton";
import EnvironmentSection from "./components/EnvironmentSection";
import ClientsSection from "./components/ClientsSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import Form from "./components/Form";
import Footer from "./components/Footer";
import vzdrzevanjeImg from "./assets/vzdrzevanje2.svg";
import ciscenjeImg from "./assets/ciscenje2.svg";
import zaupanjeImg from "./assets/zaupanje.png";
import tarcaImg from "./assets/tarca.png";
import sestavljankaImg from "./assets/sestavljanka.png";
import civilnaImg from "./assets/cz-logo.jpg";
import zpizImg from "./assets/logo_zpiz1.png";
import zzzsImg from "./assets/ZZZS_logo-cropped.svg";

const App = () => {
  const customersImgs = [
    { src: civilnaImg, alt: "Civilna zaščita" },
    { src: zpizImg, alt: "ZPIZ" },
    { src: zzzsImg, alt: "ZZZS" },
  ];

  const cardsData = [
    {
      title: "Vzdrževanje objektov",
      image: vzdrzevanjeImg,
      description:
        "zavezujemo se k zagotavljanju vrhunskh storitev vzdrževanja in čiščenja objektov",
      linkText: "Poizvej več",
    },
    {
      title: "Čiščenje objektov",
      image: ciscenjeImg,
      description:
        "zavezujemo se k zagotavljanju vrhunskh storitev vzdrževanja in čiščenja objektov",
      linkText: "Poizvej več",
    },
    {
      title: "Zaupanja vredni in zanesljivi",
      image: zaupanjeImg,
      description:
        "Naša ekipa je skrbno izbrana in usposobljena, da zagotavlja najvišjo raven storitev",
    },
    {
      title: "Natančne in kakovostne storitve",
      image: tarcaImg,
      description:
        "Naša ekipa je skrbno izbrana in usposobljena, da zagotavlja najvišjo raven storitev",
    },
    {
      title: "Prilagodimo se vašim potrebam",
      image: sestavljankaImg,
      description:
        "Naša ekipa je skrbno izbrana in usposobljena, da zagotavlja najvišjo raven storitev.",
    },
  ];

  const testimonialsData = [
    {
      company: "Podjetje d.o.o.",
      text: "Čist in urejen ambient je za nas nadvse pomemben. KD ekipa je izjemno vestna in hitra pri delu, da poskrbijo za brezhiben čistočo.",
    },
    {
      company: "Podjetje d.o.o.",
      text: "Zelo smo zadovoljni z njihovimi storitvami. Vedno se držijo dogovorjenih rokov in delajo natančno. Njihova prilagodljivost in pozornost do podrobnosti sta resnično neprecenljivi. Priporočamo jih vsem, ki potrebujejo kakovostne storitve čiščenja in vzdrževanja.",
    },
    {
      company: "Ustanove d.o.o.",
      text: "KD ekipa je profesionalna in vedno pripravljena pomagati. Njihove storitve so vrhunske in cena je zelo konkurenčna.",
    },
    {
      company: "Podjetje d.o.o.",
      text: "Sodelujemo že več let in še nikoli nismo bili razočarani. KD ekipa zagotavlja vrhunsko kakovost in zanesljivost.",
    },
    {
      company: "Organizacija d.o.o.",
      text: "Naši prostori so vedno čisti in urejeni, zahvaljujoč KD ekipi. Priporočamo jih vsem, ki iščejo zanesljive storitve vzdrževanja.",
    },
    {
      company: "Podjetje d.o.o.",
      text: "KD ekipa je izjemno fleksibilna in se prilagaja našim potrebam. Vedno so točni in storitve so vrhunske.",
    },
  ];

  return (
    <div>
      <Header />
      <Hero />
      <Cards cardsData={[cardsData[0], cardsData[1]]} />
      {/* Section header below cards */}
      <div className="text-center mt-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary">
          Zakaj izbrati <span className="text-primary">prav nas?</span>
        </h2>
        <p className="mt-3 text-black font-semibold max-w-2xl mx-auto">
          zavezujemo se k zagotavljanju vrhunskih storitev vzdrževanja in
          čiščenja objektov
        </p>
      </div>
      <Features cardsData={[cardsData[2], cardsData[3], cardsData[4]]} />

      <div className="flex justify-center mt-10 mb-10">
        <C2AButton
          btnText="Poizvej več o nas"
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-4 pt-2 text-base md:text-lg font-semibold w-60 md:w-60 text-center"
        />
      </div>

      {/* Environment responsibility section */}
      <EnvironmentSection />

      {/* Clients / Logos section */}
      <ClientsSection logos={customersImgs} />

      {/* Combined illustration + testimonials section */}
      <TestimonialsCarousel testimonials={testimonialsData} />

      {/* Contact form section */}
      <Form />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
