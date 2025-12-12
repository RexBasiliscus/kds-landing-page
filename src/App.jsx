import { Route, BrowserRouter, Routes } from "react-router";

import Home from "./pages/Home";
import Ciscenje from "./pages/Ciscenje";
import Vzdrzevanje from "./pages/Vzdrzevanje";
import Onas from "./pages/Onas";
import Kontakt from "./pages/Kontakt";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/ciscenje"
          element={<Ciscenje />}
        />
        <Route
          path="/vzdrzevanje"
          element={<Vzdrzevanje />}
        />
        <Route
          path="/o-nas"
          element={<Onas />}
        />
        <Route
          path="/kontakt"
          element={<Kontakt />}
        />
        <Route
          path="*"
          element={<Home />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
