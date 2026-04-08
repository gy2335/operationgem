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

export default function Volunteer() {
  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
        .serif { font-family: 'Cormorant Garamond', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-fade { animation: fadeUp 0.75s ease 0.15s both; }
      `}</style>

      {/*header */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{
          minHeight: "38vh",
          background: "linear-gradient(135deg, rgba(72,8,120,0.97) 0%, rgba(110,40,165,0.95) 60%, rgba(45,5,85,0.98) 100%)",
          backgroundColor: "#3a1a5c",
        }}
      >
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(220,170,255,0.15), transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,180,210,0.10), transparent 70%)" }} />

        <div className="relative z-10 w-full px-8 md:px-12 pt-36 pb-14">
          <div className="anim-fade">
            <h1
              className="serif text-white font-bold leading-[1.07] mb-4"
              style={{ fontSize: "clamp(42px, 6vw, 72px)", letterSpacing: "-0.01em" }}
            >
              Volunteer with{" "}
              <span style={{ color: "#DDB0FF", fontStyle: "italic" }}>G.E.M.</span>
            </h1>
            <p
              className="serif text-white/65 max-w-xl"
              style={{ fontSize: "clamp(17px, 2vw, 22px)", fontStyle: "italic" }}
            >
              Show up, connect, and make someone's week a little brighter.
            </p>
          </div>
        </div>
      </section>

      {/*form */}
      <section
        className="py-20 px-8 md:px-12 overflow-hidden relative"
        style={{ background: "linear-gradient(155deg, #F8F0FF 0%, #FFF0F5 50%, #EEF3FF 100%)" }}
      >
        {/* blobs */}
        <div className="absolute -top-16 -right-12 w-56 h-56 pointer-events-none opacity-10"
          style={{ background: "#B578F0", borderRadius: "50% 10% 50% 10%", transform: "rotate(20deg)" }} />
        <div className="absolute -bottom-10 -left-8 w-36 h-36 pointer-events-none opacity-10"
          style={{ background: "#E8667A", borderRadius: "50% 10% 50% 10%", transform: "rotate(-15deg)" }} />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

          {/*left */}
          <Reveal>
            <h2
              className="serif font-bold text-[#2D2226] leading-tight mb-5"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Ready to join?<br />
              <span style={{ color: "#B578F0", fontStyle: "italic" }}>Fill out the form.</span>
            </h2>
            <p className="text-[#7A6870] text-[15.5px] leading-[1.85] mb-6">
              Sign up using the form and we'll reach out within a few days with information about
              upcoming events!
            </p>

            {/* facts */}
            <div className="flex flex-col gap-4">
              {[
                { label: "Time commitment", value: "As little as once a month" },
                { label: "Who can join",    value: "Any student" },
                { label: "What to expect", value: "Arts and Crafts, Games, and more" },
                { label: "Questions?",     value: "gemprojectnyc@gmail.com" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-0.5 border-b border-pink-100 pb-4">
                  <span className="text-[#9A8890] text-xs uppercase tracking-widest">{item.label}</span>
                  <span className="text-[#2D2226] text-[15px] font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* right */}
          <Reveal delay={0.15}>
            <div className="bg-white rounded-2xl border border-pink-100 overflow-hidden shadow-sm shadow-purple-100/30">
              <iframe
                src="https://docs.google.com/forms/d/18-gwIfCSx7NUmlf-kHUkRyte8BmpiIwVq49aTdk5-Wk/viewform?embedded=true"
                width="100%"
                height="720"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="GEM Volunteer Sign-Up Form"
                className="block"
              >
                Loading
              </iframe>
            </div>
          </Reveal>

        </div>
      </section>

    </div>
  );
}
