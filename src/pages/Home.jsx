import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
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
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const EVENTS = [
  {
    id: 1,
    title: "Summer Cookie Decorating",
    date: "June 24, 2026",
    description:
      "Students and seniors made fun designs together at Brooklyn Homecrest Community Bensonhurst Center.",
    image: "cookie.png"
  },
  {
    id: 2,
    title: "Easter Egg Decorating",
    date: "April 10, 2026",
    description:
      "Students and seniors made easter eggs together at Brooklyn Homecrest Community Bensonhurst Center.",
    image: "easter.png"
  },
  {
    id: 3,
    title: "Origami Making",
    date: "March 20, 2026",
    description:
      "Students and seniors spent an afternoon making orgami crafts in Kew Gardens Older Adult Center.",
    image: "origami.png"
  }
];

const STATS = [
  { num: "100+", label: "Volunteers", color: "text-purple-500"},
  { num: "40+", label: "Events", color: "text-pink-500"}
];

export default function Home() {
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroBounce {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(6px); }
        }
        .serif { font-family: 'Cormorant Garamond', serif; }
        .anim-fade-1 { animation: fadeUp 0.75s ease 0.05s both; }
        .anim-fade-2 { animation: fadeUp 0.75s ease 0.2s both; }
        .anim-fade-3 { animation: fadeUp 0.75s ease 0.35s both; }
        .anim-bounce  { animation: heroBounce 1.8s ease-in-out infinite; }
      `}</style>
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/coverpic.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundColor: "#3a1a5c",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(72,8,120,0.90) 0%, rgba(110,40,165,0.78) 10%, rgba(45,5,85,0.88) 100%)",
          }}
        />
        <div className="relative z-10 w-full px-8 md:px-12 lg:px-20 pt-36 pb-28">
          <div className="max-w-2xl">
            <h1 className="serif anim-fade-2 text-white font-bold leading-[1.07] mb-5" style={{ fontSize: "clamp(50px, 8vw, 90px)", letterSpacing: "-0.01em" }}>
              <span style={{ color: "#DDB0FF", fontStyle: "italic" }}>Bridging hearts </span> <br /> across generations
            </h1>
            <p
              className="serif anim-fade-3 text-white/70 leading-relaxed mb-10"
              style={{ fontSize: "clamp(18px, 2.2vw, 23px)", fontStyle: "italic" }}
            >
              Connecting student volunteers with seniors.
            </p>
            <div className="anim-fade-3 flex flex-wrap gap-3">
              <Link
                to="/volunteer"
                className="bg-transparent text-white font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full no-underline border-2 border-white/40 transition-all duration-200 hover:bg-white/10"
              >
                Join as a Volunteer
              </Link>
              <Link
                to="/partner"
                className="bg-transparent text-white font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full no-underline border-2 border-white/40 transition-all duration-200 hover:bg-white/10"
              >
                Partner with Us
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-8 md:left-16 z-10 flex items-center gap-2">
          <span className="text-white/35 anim-bounce text-base">↓</span>
          <span className="text-white/30 text-[10px] font-medium tracking-[0.18em] uppercase">Scroll to explore</span>
        </div>
      </section>

      <section className="bg-[#FFFAF8] py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2
              className="serif font-bold text-[#2D2226] mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Recent Events
            </h2>
          </Reveal>

          <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS.map((event) => (
                <div key={event.id} className="bg-white border border-pink-100/80 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-purple-100/50">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full aspect-video object-cover"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="serif font-semibold text-[#2D2226] leading-snug mb-2"
                      style={{ fontSize: "20px" }}
                    >
                      {event.title}
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-[#9A8890]">{event.date}</span>
                    </div>
                    <p className="text-[#7A6870] text-sm leading-relaxed flex-1 mb-4">
                      {event.description}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </Reveal>

          <Reveal>
            <div className="text-center mt-14">
              <Link
                to="/events"
                className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold text-sm tracking-wide px-10 py-3.5 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-200"
              >
                View All Events
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section
        className="relative py-24 px-8 md:px-16 lg:px-24 overflow-hidden"
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2
              className="serif font-bold text-[#2D2226] leading-tight mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
            >
              We believe no one should <br/>feel forgotten.
            </h2>
            <p className="text-[#7A6870] text-[15.5px] leading-[1.85] mb-4">
              G.E.M. (Generational Empowerment Movement) is a fiscally sponsored nonprofit organization dedicated to the betterment of senior lives through volunteering. As the world progresses both technologically and socially, it can be difficult for older adults to feel interconnected with the present. In addition, due to the fast progression of our world, the older generation can be easily forgotten. Each of our programs were created to reduce negative elder solitude and provide hobbies and events for elders to have fun in, as well as help the youth gain more knowledge into older adult issues. Connection to the world, no matter what age, is an especially important ideal to our organization and we hope to help seniors accomplish just that.
            </p>
            <Link
              to="/about"
              className="inline-block bg-[#E8667A] hover:bg-[#C84F63] text-white font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full no-underline transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-200"
            >
              Our Full Story →
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={i}
                  className="bg-white border border-pink-100 p-7 text-center transition-transform duration-200 hover:-translate-y-1"
                >
                  <div
                    className={`serif font-bold leading-none mb-2 ${s.color}`}
                    style={{ fontSize: "52px" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[#7A6870] text-xs tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
