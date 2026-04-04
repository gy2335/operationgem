import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const purple   = "#B578F0";
  const pink     = "#E8667A";
  const charcoal = "#2D2226";
  const muted    = "#7A6870";

  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

        .gem-footer {
          background: #2D2226;
          padding: 64px 6vw 28px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .gem-footer-inner {
          max-width: 1180px;
          margin: 0 auto;
        }
        .gem-footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 52px;
          margin-bottom: 52px;
        }
        @media (max-width: 900px) {
          .gem-footer-top { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media (max-width: 540px) {
          .gem-footer-top { grid-template-columns: 1fr; }
        }

        /* Logo col */
        .gem-footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          text-decoration: none;
        }
        .gem-footer-logo-circle {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #B578F0, #E8667A);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; flex-shrink: 0;
        }
        .gem-footer-org-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px; font-weight: 600;
          color: #fff; line-height: 1;
        }
        .gem-footer-tagline {
          font-size: 13.5px;
          line-height: 1.8;
          color: rgba(255,255,255,0.45);
          max-width: 260px;
          margin-bottom: 22px;
        }
        .gem-footer-social {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          padding: 8px 16px;
          font-size: 13px;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .gem-footer-social:hover {
          background: rgba(181,120,240,0.18);
          color: #DDB0FF;
        }

        /* Link columns */
        .gem-footer-col-title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #B578F0;
          margin-bottom: 18px;
        }
        .gem-footer-links {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .gem-footer-link {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1;
        }
        .gem-footer-link:hover { color: #fff; }

        /* Bottom bar */
        .gem-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        .gem-footer-copy {
          font-size: 12.5px;
          color: rgba(255,255,255,0.3);
        }
        .gem-footer-made {
          font-size: 12.5px;
          color: rgba(255,255,255,0.3);
        }
        .gem-footer-made span {
          color: #E8667A;
        }
      `}</style>

      <footer className="gem-footer">
        <div className="gem-footer-inner">
          <div className="gem-footer-top">

            {/* Brand column */}
            <div>
              <Link to="/home" className="gem-footer-brand">
                <div className="gem-footer-logo-circle">🌸</div>
                <div className="gem-footer-org-name">G.E.M.</div>
              </Link>
              <p className="gem-footer-tagline">
                Generational Empowerment Movement. A student-run, fiscally sponsored nonprofit dedicated to reducing senior solitude through volunteering.
              </p>
              <a
                href="https://www.instagram.com/operationgem/"
                target="_blank"
                rel="noopener noreferrer"
                className="gem-footer-social"
              >
                📸 @operationgem
              </a>
            </div>

            {/* Organization */}
            <div>
              <div className="gem-footer-col-title">Organization</div>
              <div className="gem-footer-links">
                <Link to="/about"     className="gem-footer-link">About Us</Link>
                <Link to="/about"     className="gem-footer-link">Our Mission</Link>
                <Link to="/about"     className="gem-footer-link">Our Team</Link>
                <Link to="/events"    className="gem-footer-link">Press & Media</Link>
              </div>
            </div>

            {/* Programs */}
            <div>
              <div className="gem-footer-col-title">Programs</div>
              <div className="gem-footer-links">
                <Link to="/events" className="gem-footer-link">Arts &amp; Crafts</Link>
                <Link to="/events" className="gem-footer-link">Tech Companions</Link>
                <Link to="/events" className="gem-footer-link">Garden &amp; Wellness</Link>
                <Link to="/events" className="gem-footer-link">Story &amp; Memory</Link>
                <Link to="/events" className="gem-footer-link">Music &amp; Movement</Link>
              </div>
            </div>

            {/* Get Involved */}
            <div>
              <div className="gem-footer-col-title">Get Involved</div>
              <div className="gem-footer-links">
                <Link to="/volunteer" className="gem-footer-link">Volunteer</Link>
                <Link to="/chapters"  className="gem-footer-link">Chapters</Link>
                <Link to="/donate"    className="gem-footer-link">Donate</Link>
                <Link to="/volunteer" className="gem-footer-link">Contact Us</Link>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="gem-footer-bottom">
            <p className="gem-footer-copy">
              © {year} G.E.M. — Generational Empowerment Movement. Fiscally sponsored nonprofit. NYC · Est. 2023
            </p>
            <p className="gem-footer-made">
              Made with <span>♥</span> by students, for seniors.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
