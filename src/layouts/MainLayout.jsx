import { Outlet } from "react-router";
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      {/* Page-specific content will be rendered here via nested routes */}
      <Outlet />
      {/* Shared sections */}
      <Form />
      <Footer />
    </>
  );
};

export default MainLayout;
