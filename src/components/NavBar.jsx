import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const purple = "#B578F0";
  const charcoal = "#2D2226";
  const cream = "#FFFAF8";

  const linkStyle = "font-sans text-base font-semibold tracking-wider transition-colors hover:opacity-70 no-underline";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
      style={{ borderBottom: scrolled ? "1px solid #F0E4E8" : "none" }}
    >

      <div className="w-full px-8 md:px-12 h-20 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/home" className="flex items-center gap-3 no-underline">
            <img src="/rocky.png" alt="Logo" className="h-14 md:h-16 object-contain" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-none" style={{ color: charcoal }}>G.E.M.</span>
              <span className="font-serif text-[10px] tracking-widest mt-1 hidden sm:block" style={{ color: charcoal }}>
                Generational Empowerment Movement
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Pages */}
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/about" className={linkStyle} style={{ color: charcoal }}>
            About
          </Link>
          <Link to="/events" className={linkStyle} style={{ color: charcoal }}>
            Events
          </Link>

          {/* GET INVOLVED DROPDOWN */}
          <div className="relative group h-20 flex items-center">
            <button
              className={`${linkStyle} flex items-center gap-1 cursor-default outline-none border-none bg-transparent`}
              style={{ color: charcoal }}
            >
              Get Involved
              <span className="text-[10px] transition-transform group-hover:rotate-180">▼</span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-20 left-0 w-48 bg-white border border-[#F0E4E8] rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link to="/volunteer" className="block px-6 py-4 hover:bg-[#FFFAF8] transition-colors no-underline font-sans text-base font-semibold" style={{ color: charcoal }}>
                Volunteer
              </Link>
              <Link to="/partner" className="block px-6 py-4 hover:bg-[#FFFAF8] transition-colors no-underline font-sans text-base font-semibold" style={{ color: charcoal }}>
                Partner
              </Link>
              <Link to="/chapters" className="block px-6 py-4 hover:bg-[#FFFAF8] transition-colors no-underline font-sans text-base font-semibold" style={{ color: charcoal }}>
                Chapters
              </Link>
            </div>
          </div>

          <Link
            to="/donate"
            className="px-8 py-3 rounded-full font-sans text-base font-bold tracking-wider text-white no-underline transition-transform hover:scale-105"
            style={{ backgroundColor: purple }}
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: charcoal }}
        >
          {mobileMenuOpen ? <span className="text-2xl">✕</span> : <span className="text-2xl">☰</span>}
        </button>
      </div>

      {/* Mobile Menu View */}
      {mobileMenuOpen && (
        <div
          className="absolute top-full left-0 w-full md:hidden flex flex-col p-8 space-y-6 border-t border-[#F0E4E8]"
          style={{ backgroundColor: cream }}
        >
          <Link to="/about" className="text-2xl font-serif font-medium no-underline" style={{ color: charcoal }} onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/events" className="text-2xl font-serif font-medium no-underline" style={{ color: charcoal }} onClick={() => setMobileMenuOpen(false)}>
            Events
          </Link>

          <div className="flex flex-col space-y-4 pt-2 border-t border-[#F0E4E8]">
             <span className="text-xs uppercase tracking-widest font-bold" style={{ color: muted }}>Get Involved</span>
             <Link to="/volunteer" className="text-xl font-serif font-medium no-underline pl-4" style={{ color: charcoal }} onClick={() => setMobileMenuOpen(false)}>
               Volunteer
             </Link>
             <Link to="/partner" className="text-xl font-serif font-medium no-underline pl-4" style={{ color: charcoal }} onClick={() => setMobileMenuOpen(false)}>
               Partner
             </Link>
             <Link to="/chapters" className="text-xl font-serif font-medium no-underline pl-4" style={{ color: charcoal }} onClick={() => setMobileMenuOpen(false)}>
               Chapters
             </Link>
          </div>

          <Link
            to="/donate"
            className="w-full py-4 rounded-xl font-sans font-bold text-center text-white no-underline mt-4"
            style={{ backgroundColor: purple }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
}
