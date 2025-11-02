import React from "react";
import logo from "../assets/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary py-6 md:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-6 lg:gap-8">
          {/* Logo */}
          <div className="flex items-center order-1 md:order-1 md:flex-1">
            <img
              src={logo}
              alt="KD storitve"
              className="h-10 md:h-12"
            />
          </div>

          {/* Copyright text */}
          <p className="text-xs sm:text-sm text-primary font-medium text-center order-3 md:order-2 md:flex-1">
            Copyright © 2025. KD storitve d.o.o. Vse pravice pridržane.
          </p>

          {/* Links */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-primary order-2 md:order-3 md:flex-1">
            <a
              href="#piskotki"
              className="hover:underline transition"
            >
              Piškotki
            </a>
            <span className="text-primary/50">|</span>
            <a
              href="#splosni-pogoji"
              className="hover:underline transition"
            >
              Splošni pogoji
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
