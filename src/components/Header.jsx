import React, { useEffect, useState } from "react";
import headerLogo from "../assets/header-logo.svg";
import C2AButton from "./C2AButton";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the Hero h1 element position
      const heroHeading = document.querySelector(".hero-heading");
      if (heroHeading) {
        const heroRect = heroHeading.getBoundingClientRect();
        // Hide header when the h1 reaches the top of the viewport
        setIsVisible(heroRect.top > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between mt-6 px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={headerLogo}
            alt="KD Logo"
            className="h-10"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-white font-primary font-medium hover:text-secondary text-base lg:text-lg"
          >
            Čiščenje objektov
          </a>
          <a
            href="#services"
            className="text-white font-primary font-medium hover:text-secondary text-base lg:text-lg"
          >
            Vzdrževanje
          </a>
          <a
            href="#testimonials"
            className="text-white font-primary font-medium hover:text-secondary text-base lg:text-lg"
          >
            O nas
          </a>
          <a
            href="#contact"
            className="text-white font-primary font-medium hover:text-secondary text-base lg:text-lg"
          >
            Kontakt
          </a>
        </nav>

        {/* Call-to-Action Button - Desktop Only */}
        <div className="hidden md:block">
          <C2AButton btnText="Želim ponudbo" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-secondary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary backdrop-blur-sm">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-white font-primary font-medium py-2 hover:text-secondary transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Čiščenje objektov
            </a>
            <a
              href="#services"
              className="text-white font-primary font-medium py-2 hover:text-secondary transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Vzdrževanje
            </a>
            <a
              href="#testimonials"
              className="text-white font-primary font-medium py-2 hover:text-secondary transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              O nas
            </a>
            <a
              href="#contact"
              className="text-white font-primary font-medium py-2 hover:text-secondary transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </a>
            <div className="pt-2">
              <C2AButton btnText="Želim ponudbo" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
