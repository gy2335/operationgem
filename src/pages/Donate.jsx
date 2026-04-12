import React from "react";

export default function Donate() {
  const purple = "#B578F0";

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&display=swap');
        .serif { font-family: 'Cormorant Garamond', serif; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade { animation: fadeIn 1s ease-out forwards; }
      `}</style>

      {/* bkg image*/}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/donate.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="animate-fade">
          <h1 className="serif text-white font-bold leading-tight mb-6" style={{ fontSize: "clamp(30px, 8vw, 70px)" }}>
            Your donation protects <br />
            <span className="italic" style={{ color: "#DDB0FF" }}>intergenerational</span> stories.
          </h1>

          <p className="serif text-white/90 italic mb-12 mx-auto max-w-xl" style={{ fontSize: "clamp(18px, 2.5vw, 24px)" }}>
            100% of your donation goes directly toward supplies for care packages,
            event materials, and expanding our chapters across NYC.
          </p>

          {/* button */}
          <a
            href="https://hcb.hackclub.com/donations/start/generational-empowerment-movement-g-e-m"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 rounded-full font-sans text-lg font-bold tracking-widest text-white no-underline transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-2xl"
            style={{ backgroundColor: purple }}
          >
            DONATE NOW
          </a>
        </div>

        {/* footer text */}
        <div className="absolute bottom-[-10vh] left-0 w-full text-white/50 text-xs tracking-widest uppercase">
          G.E.M. is a fiscally sponsored nonprofit.
        </div>
      </div>
    </div>
  );
}
