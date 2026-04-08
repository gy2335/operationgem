import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Standard Reveal Hook
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

export default function Chapters() {
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

      {/* header */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{
          minHeight: "40vh",
          background: "linear-gradient(135deg, rgba(45,5,85,0.98) 0%, rgba(110,40,165,0.95) 60%, rgba(72,8,120,0.97) 100%)",
        }}
      >
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #DDB0FF, transparent 70%)" }} />

        <div className="relative z-10 w-full px-8 md:px-12 lg:px-20 pt-36 pb-16">
          <div className="anim-fade max-w-3xl">
            <h1 className="serif text-white font-bold leading-tight mb-4" style={{ fontSize: "clamp(48px, 7vw, 82px)" }}>
              Start a <span className="italic" style={{ color: "#DDB0FF" }}>Chapter</span>
            </h1>
            <p className="serif text-white/70" style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}>
              Lead the movement at your school and bridge the generational gap.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 md:px-12 lg:px-20 bg-[#FFFAF8] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start z-10 relative">

          {/*info */}
          <Reveal>
            <div className="space-y-12">
              <div>
                <h2 className="serif text-4xl font-bold text-[#2D2226] mb-4">Why lead a G.E.M Chapter?</h2>
                <p className="text-[#7A6870] leading-relaxed text-lg">
                  Starting a G.E.M. chapter at your school is an unique opportunity to lead a movement that directly combats the rise of senior isolation while creating a powerful impact in your own community. As a chapter leader, you will do more than just volunteering. You will make meaningful change, gaining the ability to manage your own team, organize fundraisers, and lead impactful initiatives like card-making or senior center events. This role offers a rare bridge between high school leadership and nonprofit experience, providing you with verified service hours and an opportunity to demonstrate your volunteerism!
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm">
                <h3 className="serif text-2xl font-bold text-[#2D2226] mb-4">Requirements</h3>
                <ul className="space-y-3 text-[#7A6870] text-sm list-none p-0">
                  <li>• Must be in High School or above</li>
                  <li>• Group of 3 people ready to lead</li>
                  <li>• Passionate about community service</li>
                  <li>• Active Instagram presence for your chapter</li>
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Form */}
          <Reveal delay={0.2}>
            <div className="bg-white rounded-3xl border border-purple-100 overflow-hidden shadow-2xl shadow-purple-900/5">
              <iframe
                src="https://docs.google.com/forms/d/1CN5443YguJZ3owMC7SfbICSSkHbpQvk6sYy0HHvJbE0/viewform?embedded=true"
                width="100%"
                height="850"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="GEM Chapter Application"
                className="block"
              >
                Loading…
              </iframe>
            </div>
            <p className="text-center text-[#9A8890] text-xs mt-6">
              Questions? Reach out to <a href="mailto:gemprojectnyc@gmail.com" className="text-purple-500 underline">gemprojectnyc@gmail.com</a>
            </p>
          </Reveal>

        </div>
      </section>
    </div>
  );
}
