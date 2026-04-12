import React, { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const PAST_EVENTS = [
  {
    id: 1,
    title: "Easter Egg Decorating",
    date: "April 10, 2026",
    location: "Brooklyn Homecrest Community Bensonhurst Center",
    image: "easter.png",
  },
  {
    id: 2,
    title: "Origami Making",
    date: "March 20, 2026",
    location: "Kew Gardens Older Adult Center",
    image: "origami.png",
  },
  {
    id: 3,
    title: "Origami Making",
    date: "February 19, 2026",
    location: "Brooklyn Homecrest Community Services Bensonhurst Center",
    image: "bingo.png",
  },
  {
    id: 4,
    title: "Tote Bag Making",
    date: "January 20, 2026",
    location: "Brooklyn Homecrest Community Bensonhurst Center",
    image: "totebag.png",
  },
];

const UPCOMING_EVENTS = [
];

export default function Events() {
  const stripRef = useRef(null);

  const scroll = (dir) => {
    if (stripRef.current) {
      stripRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
        .serif { font-family: 'Cormorant Garamond', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-fade { animation: fadeUp 0.75s ease 0.15s both; }

        .photo-strip::-webkit-scrollbar { height: 0px; }
        .photo-strip { scrollbar-width: none; }

        .scroll-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: white;
          border: 1.5px solid #e9d5f5;
          color: #B578F0;
          font-size: 18px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .scroll-btn:hover {
          background: #f3e8ff;
          border-color: #B578F0;
        }

        .event-photo {
          width: 280px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .event-photo img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 20px;
        }

        .photo-placeholder {
          width: 100%;
          height: 200px;
          border-radius: 20px;
          background: linear-gradient(135deg, #f3e8ff, #fce4ec);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c4a0e0;
          font-size: 32px;
        }
      `}</style>

      {/* Hero Header */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{
          minHeight: "40vh",
          background: "linear-gradient(135deg, rgba(45,5,85,0.98) 0%, rgba(110,40,165,0.95) 60%, rgba(72,8,120,0.97) 100%)",
        }}
      >
        <div
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #DDB0FF, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-10"
          style={{ background: "radial-gradient(circle, #F9A8D4, transparent 70%)" }}
        />
        <div className="relative z-10 w-full px-8 md:px-12 lg:px-20 pt-36 pb-16">
          <div className="anim-fade max-w-3xl">
            <h1
              className="serif text-white font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(48px, 7vw, 82px)" }}
            >
              Our <span className="italic" style={{ color: "#DDB0FF" }}>Events</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section
        className="py-20 px-8 md:px-12 lg:px-20 relative overflow-hidden"
        style={{ background: "linear-gradient(155deg, #F8F0FF 0%, #FFF0F5 50%, #EEF3FF 100%)" }}
      >
        <div
          className="absolute -top-16 -right-12 w-56 h-56 pointer-events-none opacity-10"
          style={{ background: "#B578F0", borderRadius: "50% 10% 50% 10%", transform: "rotate(20deg)" }}
        />
        <div
          className="absolute -bottom-10 -left-8 w-36 h-36 pointer-events-none opacity-10"
          style={{ background: "#E8667A", borderRadius: "50% 10% 50% 10%", transform: "rotate(-15deg)" }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <h2
              className="serif font-bold text-[#2D2226] mb-2"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Upcoming Events
            </h2>
            <p className="text-[#9A8890] text-sm mb-10 tracking-wide">
              Come join us, all are welcome!
            </p>
          </Reveal>

          {UPCOMING_EVENTS.length === 0 ? (
            <Reveal>
              <div
                className="bg-white border border-pink-100 flex flex-col items-center justify-center text-center py-16 px-8"
                style={{ borderRadius: "20px" }}
              >
                <div className="serif italic mb-3" style={{ fontSize: "32px", color: "#DDB0FF" }}>
                  ✦
                </div>
                <p className="serif text-[#2D2226] font-semibold mb-1" style={{ fontSize: "20px" }}>
                  No upcoming events at the moment
                </p>
                <p className="text-[#9A8890] text-sm">
                  Check back soon!
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="flex flex-col gap-4">
              {UPCOMING_EVENTS.map((ev, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div
                    className="bg-white border border-pink-100 flex items-stretch overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-100/60"
                    style={{ borderRadius: "16px" }}
                  >
                    <div
                      className="flex flex-col items-center justify-center px-6 py-5 min-w-[80px]"
                      style={{ background: ev.color + "18" }}
                    >
                      <span className="text-xs font-semibold tracking-widest" style={{ color: ev.color }}>
                        {ev.month}
                      </span>
                      <span className="serif font-bold leading-none" style={{ fontSize: "38px", color: ev.color }}>
                        {ev.day}
                      </span>
                    </div>
                    <div style={{ width: "3px", background: ev.color, flexShrink: 0 }} />
                    <div className="flex flex-col justify-center px-6 py-5 flex-1">
                      <h3 className="serif font-semibold text-[#2D2226] mb-1" style={{ fontSize: "20px" }}>
                        {ev.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-xs text-[#9A8890]">
                        <span>🕐 {ev.time}</span>
                        <span>📍 {ev.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center pr-6 text-[#D8C4E8]">
                      <span style={{ fontSize: "20px" }}>›</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal delay={0.2}>
            <p className="text-center text-[#9A8890] text-sm mt-10">
              Want to be notified about events?{" "}
              <a
                href="/volunteer"
                className="text-purple-500 underline underline-offset-2 hover:text-purple-700"
              >
                Sign up as a volunteer →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Past Events Photo Strip */}
      <section className="py-20 px-8 md:px-12 lg:px-20 bg-[#FFFAF8]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2
              className="serif font-bold text-[#2D2226] mb-2"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Past Events
            </h2>
            <p className="text-[#9A8890] text-sm mb-8 tracking-wide">
              Memories that we have made together recently.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-4">
              <button className="scroll-btn" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>

              <div
                ref={stripRef}
                className="photo-strip flex gap-5 overflow-x-auto flex-1"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {PAST_EVENTS.map((ev) => (
                  <div key={ev.id} className="event-photo" style={{ scrollSnapAlign: "start" }}>
                    <div className="relative">
                      <img
                        src={ev.image}
                        alt={ev.title}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="photo-placeholder" style={{ display: "none" }}>
                        ✦
                      </div>
                    </div>
                    <div>
                      <p className="serif font-semibold text-[#2D2226]" style={{ fontSize: "17px", lineHeight: 1.3 }}>
                        {ev.title}
                      </p>
                      <p className="text-[#9A8890] text-xs mt-0.5">{ev.date}</p>
                      <p className="text-[#B59AAA] text-xs mt-0.5">{ev.location}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="scroll-btn" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
