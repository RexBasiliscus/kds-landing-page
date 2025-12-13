import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect, useRef } from "react";
import Home from "./pages/Home";
import Ciscenje from "./pages/Ciscenje";
import Vzdrzevanje from "./pages/Vzdrzevanje";
import Onas from "./pages/Onas";
import Kontakt from "./pages/Kontakt";
import MainLayout from "./layouts/MainLayout";
import { scrollToTop } from "./utils/scrollToTop";

const App = () => {
  function ScrollHandler() {
    const location = useLocation();

    // Track previous pathname to only trigger when the path actually changes
    const lastPathRef = useRef(location.pathname);
    const lastHashRef = useRef(location.hash);

    useEffect(() => {
      const prev = lastPathRef.current;
      const curr = location && location.pathname;
      const prevHash = lastHashRef.current;
      const currHash = location && location.hash;

      // If the pathname actually changed
      if (prev !== curr) {
        // If we navigated away from a hash (e.g. /#contact -> /ciscenje),
        // perform an immediate jump to top to override any anchor/scroll anchoring behavior.
        if (prevHash) {
          scrollToTop({ behavior: "auto" });
          lastPathRef.current = curr;
          lastHashRef.current = currHash;
          return;
        }

        // Otherwise schedule a smooth scroll after paint
        const raf = requestAnimationFrame(() => scrollToTop());
        lastPathRef.current = curr;
        lastHashRef.current = currHash;
        return () => cancelAnimationFrame(raf);
      }

      // If hash was removed while staying on same path (e.g. /#contact -> / on Home page),
      // scroll to top smoothly
      if (prevHash && !currHash) {
        scrollToTop({ behavior: "smooth" });
      }

      // keep refs in sync for same-path (e.g. hash changes)
      lastPathRef.current = curr;
      lastHashRef.current = currHash;
    }, [location && location.pathname, location && location.hash]);

    return null;
  }

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
