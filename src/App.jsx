import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import Home from "./pages/Home";
import Ciscenje from "./pages/Ciscenje";
import Vzdrzevanje from "./pages/Vzdrzevanje";
import Onas from "./pages/Onas";
import Kontakt from "./pages/Kontakt";
import MainLayout from "./layouts/MainLayout";
import { scrollToTop } from "./utils/scrollToTop";

const App = () => {
  // inner handler must be inside the Router to use hooks
  const ScrollHandler = () => {
    const location = useLocation();

    useEffect(() => {
      if (location && location.pathname) {
        // Run the scroll after the browser has painted the new route
        // to avoid being overridden by route-mounted layout effects.
        const raf = requestAnimationFrame(() => scrollToTop());
        return () => cancelAnimationFrame(raf);
      }
    }, [location && location.pathname]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollHandler />
      <Routes>
        {/* Single main layout for all pages */}
        <Route element={<MainLayout />}>
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
          {/* Fallback */}
          <Route
            path="*"
            element={<Home />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
