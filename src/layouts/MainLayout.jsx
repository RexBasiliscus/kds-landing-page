import { Outlet } from "react-router";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { testimonialsData } from "../data/testimonialsData";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const MainLayout = () => {
  return (
    <>
      <Header />
      {/* Page-specific content will be rendered here via nested routes */}
      <Outlet />
      {/* Shared sections */}
      <TestimonialsCarousel testimonials={testimonialsData} />
      <Form />
      <Footer />
    </>
  );
};

export default MainLayout;
