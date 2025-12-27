import SharedHero from "../components/SharedHero";
import Services from "../components/Services";
import CommentsSection from "../components/CommentsSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { vzdrzevanjeServices } from "../data/vzdrzevanjeServices";
import { testimonialsData } from "../data/testimonialsData";
import WhyChooseUs from "../components/WhyChooseUs";

const Vzdrzevanje = () => {
  return (
    <>
      <SharedHero />
      <Services services={vzdrzevanjeServices} />
      <CommentsSection comments={testimonialsData} />
      <WhyChooseUs className="pb-24" />
      <TestimonialsCarousel testimonials={testimonialsData} />
    </>
  );
};

export default Vzdrzevanje;
