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

function getSlideId(url) {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

function getThumbnailUrl(url) {
  const id = getSlideId(url);
  if (!id) return null;
  return `https://docs.google.com/presentation/d/${id}/export/png`;
}

const PRESENTATIONS = [
  {
    id: 1,
    title: "Understanding Senior Isolation",
    description: "An in-depth look at the growing epidemic of loneliness among older adults and practical steps communities can take to help.",
    link: "https://docs.google.com/presentation/d/1c4gRBAQVl2ScUpYzmYFNGVjxvUFk1TxOTYez_2kXKYQ/edit",
    color: "#B578F0",
  },
  {
    id: 2,
    title: "Elder Abuse Awareness",
    description: "Recognizing the signs of elder abuse, neglect, and exploitation, and how young advocates can make a difference.",
    link: "https://docs.google.com/presentation/d/1mdWbcHtArGgCJCPSEfIIuZpOsIs_3N2gtOuQTR0iYsg/edit",
    color: "#E8667A",
  },
  {
    id: 3,
    title: "Navigating Technology as a Senior",
    description: "How the digital divide affects older adults and what we can do to bridge the gap between generations.",
    link: "https://docs.google.com/presentation/d/1SnGwp1x-DhAtDtHtpZgc2sDr1hQeEjwP7-xytfFv7og/edit",
    color: "#B578F0",
  },
  {
    id: 4,
    title: "Mental Health & Aging",
    description: "Exploring depression, anxiety, and cognitive decline in older adults — breaking the stigma and building empathy.",
    link: "https://docs.google.com/presentation/d/1Y8s_FXrW5n_Q754j9DjVdK6VzddtzaNVViOV18vZvPo/edit",
    color: "#E8667A",
  },
  {
    id: 5,
    title: "Immunization Amongst the Elderly Community",
    description: "Why immunzation is so important and can save lives.",
    link: "https://docs.google.com/presentation/d/1RlPfXuepwGva8IeXwmFQru5Rv_82nQ8_AiwHWH7s8-0/edit",
    color: "#B578F0",
  }
];

function SlidePreview({ link, color, title }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const thumbnailUrl = getThumbnailUrl(link);
  const hasRealLink = link !== "#" && thumbnailUrl;

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: "12px 12px 0 0",
        overflow: "hidden",
        background: color + "14",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {hasRealLink && !errored ? (
        <>
          {!loaded && (
            <div
              style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: color + "14",
              }}
            >
              <div style={{ width: 28, height: 28, borderRadius: "50%", border: `2px solid ${color}30`, borderTopColor: color, animation: "spin 0.8s linear infinite" }} />
            </div>
          )}
          <img
            src={thumbnailUrl}
            alt={`Preview of ${title}`}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            style={{
              width: "100%", height: "100%",
              objectFit: "cover",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
        </>
      ) : (
        <div
          style={{
            width: "100%", height: "100%",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 8,
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="3" width="20" height="14" rx="2" stroke={color} strokeWidth="1.5" fill={color + "20"} />
            <path d="M8 21h8M12 17v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span style={{ fontSize: "11px", color: color, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Coming soon
          </span>
        </div>
      )}
    </div>
  );
}

export default function Insights() {
  return (
    <div className="overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');
        .serif { font-family: 'Cormorant Garamond', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .anim-fade { animation: fadeUp 0.75s ease 0.15s both; }

        .insight-card {
          background: white;
          border: 1px solid #f3e0f7;
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          overflow: hidden;
        }
        .insight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(181, 120, 240, 0.13);
          border-color: #e0c8f5;
        }
        .card-body {
          padding: 20px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
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
            <p className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              G.E.M. Presents
            </p>
            <h1
              className="serif text-white font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(42px, 7vw, 78px)" }}
            >
              G.E.M. of{" "}
              <span className="italic" style={{ color: "#DDB0FF" }}>Insights</span>
            </h1>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="py-14 px-8 md:px-12 lg:px-20 bg-white border-b border-pink-50">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-[#7A6870] text-[16px] leading-[1.9] text-center">
              G.E.M. of Insights are monthly presentations created by our Research Manager where we strive to inform our community about the countless issues and events seniors may encounter and how we can support them and acknowledge the challenges they face.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Presentations Grid */}
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
              All Presentations
            </h2>
            <p className="text-[#9A8890] text-sm mb-12 tracking-wide">
              Click any card to view the full slides
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRESENTATIONS.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <a
                  href={p.link !== "#" ? p.link : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="insight-card"
                  style={{ cursor: p.link !== "#" ? "pointer" : "default" }}
                >
                  <SlidePreview link={p.link} color={p.color} title={p.title} />

                  <div className="card-body">
                    <h3
                      className="serif font-bold text-[#2D2226] leading-snug"
                      style={{ fontSize: "21px" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[#7A6870] text-sm leading-relaxed flex-1">
                      {p.description}
                    </p>
                    {p.link !== "#" && (
                      <div className="flex items-center gap-1.5 mt-2">
                        <span
                          className="text-xs font-semibold tracking-widest uppercase"
                          style={{ color: p.color }}
                        >
                          View slides
                        </span>
                        <span style={{ color: p.color, fontSize: "13px" }}>↗</span>
                      </div>
                    )}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
