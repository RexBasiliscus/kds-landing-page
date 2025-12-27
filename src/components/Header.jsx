import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import headerLogo from "../assets/header-logo.svg";
import C2AButton from "./C2AButton";
import { scrollToTop } from "../utils/scrollToTop";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = () => {
    scrollToTop({ behavior: "auto" });
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // when user scrolls down more than 100px, set isScrolled to true
      setIsScrolled(window.scrollY > 100);
    };
    //when user starts scrolling, call handleScroll
    window.addEventListener("scroll", handleScroll);
    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 pt-3 md:pt-4 ${
        isMobileMenuOpen ? "duration-0" : "duration-300"
      } transition-all ${
        isScrolled
          ? "bg-primary pb-3"
          : isMobileMenuOpen
          ? "bg-primary pb-3"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Home"
            title="Home"
          >
            <img
              src={headerLogo}
              alt="KD Logo"
              className="h-10"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/ciscenje"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `nav-link text-white font-primary font-medium hover:text-secondary text-base lg:text-xl ${
                isActive ? "text-secondary active" : ""
              }`
            }
          >
            Čiščenje objektov
          </NavLink>
          <NavLink
            to="/vzdrzevanje"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `nav-link text-white font-primary font-medium hover:text-secondary text-base lg:text-xl ${
                isActive ? "text-secondary active" : ""
              }`
            }
          >
            Vzdrževanje
          </NavLink>
          <NavLink
            to="/o-nas"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `nav-link text-white font-primary font-medium hover:text-secondary text-base lg:text-xl ${
                isActive ? "text-secondary active" : ""
              }`
            }
          >
            O nas
          </NavLink>
          <NavLink
            to="/kontakt"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `nav-link text-white font-primary font-medium hover:text-secondary text-base lg:text-xl ${
                isActive ? "text-secondary active" : ""
              }`
            }
          >
            Kontakt
          </NavLink>
        </nav>

        {/* Call-to-Action Button - Desktop Only */}
        <div className="hidden md:block">
          <C2AButton
            to="/#contact"
            btnText="Želim ponudbo"
          />
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
          <nav className="container mx-auto px-6 py-0 flex flex-col space-y-4 pt-4 pb-4">
            <NavLink
              to="/ciscenje"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `nav-link text-white font-primary font-medium py-2 hover:text-secondary transition ${
                  isActive ? "text-secondary active" : ""
                }`
              }
            >
              Čiščenje objektov
            </NavLink>
            <NavLink
              to="/vzdrzevanje"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `text-white font-primary font-medium py-2 hover:text-secondary transition ${
                  isActive ? "text-secondary" : ""
                }`
              }
            >
              Vzdrževanje objektov
            </NavLink>
            <NavLink
              to="/o-nas"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `text-white font-primary font-medium py-2 hover:text-secondary transition ${
                  isActive ? "text-secondary" : ""
                }`
              }
            >
              O nas
            </NavLink>
            <NavLink
              to="/kontakt"
              onClick={handleNavClick}
              className={({ isActive }) =>
                `text-white font-primary font-medium py-2 hover:text-secondary transition ${
                  isActive ? "text-secondary" : ""
                }`
              }
            >
              Kontakt
            </NavLink>
            <div className="pt-2">
              <C2AButton
                to="/#contact"
                btnText="Želim ponudbo"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
