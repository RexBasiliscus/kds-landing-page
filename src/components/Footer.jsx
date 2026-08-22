import { Link } from "react-router";
import logo from "../assets/footer-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-6 md:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-6">
          {/* Logo */}
          <div className="order-1 justify-self-center md:justify-self-start">
            <img
              src={logo}
              alt="KD storitve"
              className="h-10 md:h-12"
            />
          </div>

          {/* Copyright text */}
          <p className="order-3 justify-self-center text-center text-xs font-medium text-primary sm:text-sm md:order-2">
            Copyright © {currentYear}. KD storitve d.o.o. Vse pravice pridržane.
          </p>

          <Link
            to="/politika-zasebnosti"
            className="order-2 justify-self-center text-xs text-primary underline underline-offset-4 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-sm md:order-3 md:justify-self-end"
          >
            Politika zasebnosti
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
