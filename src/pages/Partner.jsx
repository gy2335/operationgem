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

export default function Partner() {
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
        <div className="relative z-10 w-full px-8 md:px-12 lg:px-20 pt-36 pb-16">
          <div className="anim-fade max-w-3xl">
            <h1
              className="serif text-white font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(48px, 7vw, 82px)" }}
            >
              Partner with{" "}
              <span className="italic" style={{ color: "#DDB0FF" }}>G.E.M.</span>
            </h1>
            <p className="serif text-white/70" style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}>
              Bring our volunteers to your senior center and make a lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-8 md:px-12 lg:px-20 bg-[#FFFAF8] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start z-10 relative">

          {/* Left — Info */}
          <Reveal>
            <div className="space-y-12">
              <div>
                <h2 className="serif text-4xl font-bold text-[#2D2226] mb-4">
                  Why partner with G.E.M.?
                </h2>
                <p className="text-[#7A6870] leading-relaxed text-lg">
                  G.E.M. partners with senior centers across New York City to bring student volunteers directly to the people who need them most. Whether it's arts & crafts, games, or holiday celebrations, our volunteers show up with energy, warmth, and a genuine desire to connect. Partnering with us means giving your seniors regular, meaningful social interaction at no cost to your center.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm">
                <h3 className="serif text-2xl font-bold text-[#2D2226] mb-4">What to expect</h3>
                <ul className="space-y-3 text-[#7A6870] text-sm list-none p-0">
                  <li>• Recurring volunteer visits tailored to your schedule</li>
                  <li>• Student-led activities like crafts, games, and holiday events</li>
                  <li>• Dedicated chapter point-of-contact for coordination</li>
                  <li>• Completely free — G.E.M. covers event supplies</li>
                  <li>• Flexible frequency based on your center's needs</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-pink-100 shadow-sm">
                <h3 className="serif text-2xl font-bold text-[#2D2226] mb-4">Who can partner?</h3>
                <ul className="space-y-3 text-[#7A6870] text-sm list-none p-0">
                  <li>• Senior centers in New York City</li>
                  <li>• Adult day programs and assisted living facilities</li>
                  <li>• Community centers serving older adults</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Right — Form */}
          <Reveal delay={0.2}>
            <div className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-2xl shadow-purple-900/5">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdCtUjbV73bXE2chazkhc80ki0sPCs2jewh5Pbf1fU2Ekiy8g/viewform?embedded=true"
                width="100%"
                height="1754"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="GEM Partner Application"
                className="block"
              >
                Loading…
              </iframe>
            </div>
            <p className="text-center text-[#9A8890] text-xs mt-6">
              Questions? Reach out to{" "}
              <a href="mailto:gemprojectnyc@gmail.com" className="text-purple-500 underline">
                gemprojectnyc@gmail.com
              </a>
            </p>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
