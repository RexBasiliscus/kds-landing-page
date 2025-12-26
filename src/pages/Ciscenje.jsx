import SharedHero from "../components/SharedHero";
import Services from "../components/Services";
import CommentsSection from "../components/CommentsSection";
import { ciscenjeServices } from "../data/ciscenjeServices";
import { testimonialsData } from "../data/testimonialsData";
import WhyChooseUs from "../components/WhyChooseUs";

const Ciscenje = () => {
  return (
    <>
      <SharedHero />
      <Services services={ciscenjeServices} />
      <CommentsSection comments={testimonialsData} />
      <WhyChooseUs className="pb-24" />
    </>
  );
};

export default Ciscenje;
