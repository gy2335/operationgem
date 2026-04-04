import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-purple-950 px-8 md:px-12 pt-24 pb-12 border-t border-white/5 w-full">
      <div className="max-w-7xl mx-auto">

        {/* Main Grid: 4 Equal Columns on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 no-underline mb-6">
              <img src="/rocky.png" alt="Logo" className="h-16 md:h-20 object-contain" />
              <span
                className="text-white font-bold text-2xl tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                G.E.M.
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed leading-6">
              Generational Empowerment Movement. A student-run, fiscally sponsored nonprofit
              dedicated to reducing senior solitude through volunteering.
            </p>
          </div>

          {/* Column 2: Organization */}
          <div className="flex flex-col">
            <p className="text-purple-300 text-sm font-bold tracking-[0.2em] uppercase mb-8">
              Organization
            </p>
            <nav className="flex flex-col gap-4">
              {['About', 'Events', 'Volunteer', 'Chapters', 'Donate'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-white/60 text-[15px] no-underline hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact (Email Aligned) */}
          <div className="flex flex-col">
            <p className="text-purple-300 text-sm font-bold tracking-[0.2em] uppercase mb-8">
              Contact Us
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-white/40 text-xs uppercase tracking-widest">Email</span>
              <a
                href="mailto:gemprojectnyc@gmail.com"
                className="text-white text-base md:text-lg hover:text-purple-300 transition-colors break-all no-underline"
              >
                gemprojectnyc@gmail.com
              </a>
            </div>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col">
            <p className="text-purple-300 text-sm font-bold tracking-[0.2em] uppercase mb-8">
              Instagram
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/operationgem/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 text-sm text-white/80 no-underline transition-all hover:bg-purple-400/20 hover:text-white hover:-translate-y-1"
              >
                <span>Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 text-sm text-white/80 no-underline transition-all hover:bg-purple-400/20 hover:text-white hover:-translate-y-1"
              >
                <span>TikTok</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-white/30 text-xs md:text-sm">
              © {year} Generational Empowerment Movement.
            </p>
            <p className="text-white/20 text-[10px] uppercase tracking-widest">
              Fiscally sponsored nonprofit
            </p>
          </div>

          <p className="text-white/40 text-sm italic">
            Made with <span className="text-pink-500 not-italic">♥</span> by students for seniors
          </p>
        </div>

      </div>
    </footer>
  );
}
