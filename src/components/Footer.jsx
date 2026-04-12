import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-purple-950 w-full">
      <div className="max-w-6xl mx-auto px-8 md:px-12 pt-20 pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-16">

          {/* brand */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 no-underline mb-5">
              <img src="/rocky.png" alt="GEM Logo" className="h-14 object-contain" />
              <span
                className="text-white text-2xl font-bold leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                G.E.M.
              </span>
            </Link>
            <p className="text-white/45 text-[15px] leading-[1.8] mb-7">
              A student-run 501(c)(3) nonprofit bridging the gap between generations through volunteering, community, and care.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/operationgem/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/15 rounded-full px-5 py-2.5 text-sm text-white/60 no-underline transition-all duration-200 hover:border-purple-400/50 hover:text-purple-200 hover:bg-purple-400/10"
              >
                📸 Instagram
              </a>
              <a
                href="https://www.tiktok.com/@operationgem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/15 rounded-full px-5 py-2.5 text-sm text-white/60 no-underline transition-all duration-200 hover:border-purple-400/50 hover:text-purple-200 hover:bg-purple-400/10"
              >
                🎵 TikTok
              </a>
            </div>
          </div>

          {/* explore */}
          <div className="flex flex-col sm:items-center">
            <div>
              <p className="text-purple-300 text-xs font-bold tracking-[0.16em] uppercase mb-6">
                Explore
              </p>
              <div className="flex flex-col gap-4">
                <Link to="/about" className="text-white/50 text-[15px] no-underline hover:text-white transition-colors duration-200">About</Link>
                <Link to="/events" className="text-white/50 text-[15px] no-underline hover:text-white transition-colors duration-200">Events</Link>
                <Link to="/volunteer" className="text-white/50 text-[15px] no-underline hover:text-white transition-colors duration-200">Volunteer</Link>
                <Link to="/partner" className="text-white/50 text-[15px] no-underline hover:text-white transition-colors duration-200">Partner</Link>
                <Link to="/chapters" className="text-white/50 text-[15px] no-underline hover:text-white transition-colors duration-200">Chapters</Link>
                <Link to="/donate" className="text-white/50 text-[15px] no-underline hover:text-white transition-colors duration-200">Donate</Link>
              </div>
            </div>
          </div>

          {/*contact */}
          <div className="flex flex-col sm:items-center">
            <div>
              <p className="text-purple-300 text-xs font-bold tracking-[0.16em] uppercase mb-6">
                Contact
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-white/30 text-xs uppercase tracking-widest">Email</span>
                  <a
                    href="mailto:gemprojectnyc@gmail.com"
                    className="text-white/60 text-[15px] no-underline hover:text-white transition-colors duration-200"
                  >
                    gemprojectnyc@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="text-white/30 text-xs uppercase tracking-widest">Location</span>
                  <span className="text-white/60 text-[15px]">New York City, NY</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-sm">
            © {year} G.E.M. Fiscally sponsored nonprofit.
          </p>
          <p className="text-white/25 text-sm">
            Made with <span className="text-pink-400">♥</span> by students for seniors.
          </p>
        </div>

      </div>
    </footer>
  );
}
