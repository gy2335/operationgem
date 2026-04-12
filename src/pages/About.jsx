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

export default function About() {
  const PILLARS = [
    {
      id: "01",
      title: "Intergenerational Events",
      text: "Fostering healthy relationships between older adults and youth is extremely impactful. Although we are starting in New York City, we hope that we can expand our impact and make sure youth worldwide have an understanding and appreciation for the older adult community, and vice versa!",
    },
    {
      id: "02",
      title: "Social Support",
      text: "There are many issues that surround the older adult community such as negligence and elder abuse, and through exposing the youth to these issues, we hope that we can foster an understanding youth community that has passion to solve these issues, and also volunteer for GEM’s events.",
    },
    {
      id: "03",
      title: "Youth Development",
      text: "While GEM’s main ideal is to benefit the older adult community, the youth can benefit tremendously through volunteering with us. Volunteering and cultivating kindness is a crucial trait for success in the world, and GEM can contribute to developing these skills at a young age through our programs.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
        .serif { font-family: 'Cormorant Garamond', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-fade { animation: fadeUp 0.8s ease 0.15s both; }
      `}</style>

      {/* header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/about.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="serif text-white font-bold leading-tight anim-fade" style={{ fontSize: "clamp(48px, 8vw, 82px)" }}>
            Our <span className="italic" style={{ color: "#DDB0FF" }}>Story</span>
          </h1>
        </div>
      </section>

      {/* origin */}
      <section className="py-24 px-8 md:px-12 lg:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="serif text-[#2D2226] font-bold mb-8" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
              Founded at Stuyvesant, <br/>Expanding Across <span className="italic text-[#B578F0]">NYC</span>
            </h2>
            <div className="space-y-6 text-[#7A6870] text-lg leading-relaxed">
              <p>
                The Generational Empowerment Movement (G.E.M.) was born when two students at Stuyvesant High School noticed that as the world advances technologically, our older generation is often left behind, struggling with isolation and a lack of connection to the modern world.
              </p>
              <p>
                What started as a local intitative has now turned into a fiscally-sponsored nonprofit, growing its mission to high schools throughout New York City. We believe that connection has no age limit, and our programs are designed to reduce negative elder solitude while giving youth the opportunity to gain wisdom from those who came before them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* pillars */}
      <section className="py-24 px-8 md:px-12 lg:px-20 bg-[#FFFAF8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {PILLARS.map((pillar, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="group">
                  <div className="text-6xl font-serif font-bold text-purple-100 mb-4 transition-colors group-hover:text-purple-200">
                    {pillar.id}
                  </div>
                  <h3 className="serif text-2xl font-bold text-[#2D2226] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-[#7A6870] leading-relaxed text-[15px]">
                    {pillar.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
