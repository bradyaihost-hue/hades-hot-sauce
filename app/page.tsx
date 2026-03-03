"use client";

import { useEffect } from "react";

function EmberParticles() {
  useEffect(() => {
    const container = document.getElementById("ember-container");
    if (!container) return;

    const createEmber = () => {
      const ember = document.createElement("div");
      ember.className = "ember-particle";
      ember.style.left = `${Math.random() * 100}vw`;
      ember.style.animationDuration = `${4 + Math.random() * 6}s`;
      ember.style.animationDelay = `${Math.random() * 2}s`;
      ember.style.width = `${2 + Math.random() * 4}px`;
      ember.style.height = ember.style.width;
      container.appendChild(ember);
      setTimeout(() => ember.remove(), 12000);
    };

    const interval = setInterval(createEmber, 600);
    return () => clearInterval(interval);
  }, []);

  return <div id="ember-container" className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />;
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/mascots-dinner.jpg"
          alt="Hades mascots dining in the underworld"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hades-black/60 via-hades-black/40 to-hades-black" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="text-hades-gold/80 font-display tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-pulse">
          ☠ Homegrown · Handmade · Hoarded ☠
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-fire-gradient">HADES</span>
          <br />
          <span className="text-white/90">HOT SAUCE</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/60 font-body mb-8 max-w-2xl mx-auto">
          For people who use half a bottle of Cholula on a breakfast burrito and think... I could do better.
        </p>

        <div className="inline-flex items-center gap-3 border border-hades-red/30 rounded-full px-6 py-3 bg-hades-red/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-hades-red animate-pulse" />
          <span className="font-display text-sm tracking-widest uppercase text-hades-gold">
            Not for sale · Not for everyone
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-hades-gold/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function SaucesSection() {
  const sauces = [
    {
      name: "Hades Original",
      tagline: "The Everyday One",
      description:
        "Habaneros and carrots. That's the base. The carrots give it that golden color and a little sweetness before the heat shows up. Goes on everything. Designed for people who think most hot sauces are just spicy vinegar.",
      image: "/original-logo.jpg",
      bottle: "/bottles-lineup.jpg",
      heat: 3,
      maxHeat: 5,
      accent: "from-hades-orange to-hades-gold",
    },
    {
      name: "Hades Xxxtra Hot",
      tagline: "The Happy Accident",
      description:
        "Sometimes too many bhut orange Copenhagen peppers end up in a batch. That's a ghost pepper variant, for the uninitiated. When that happens, it gets its own label. Not on purpose. Just how it goes.",
      image: "/xxxtra-hot-logo-black.jpg",
      bottle: "/xxxtra-hot-bottle.jpg",
      heat: 5,
      maxHeat: 5,
      accent: "from-hades-red to-hades-orange",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 section-glow">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-fire-gradient mb-4">
            The Sauces
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Two sauces. One on purpose, one by accident.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {sauces.map((sauce) => (
            <div
              key={sauce.name}
              className="group relative bg-hades-card border border-white/5 rounded-2xl overflow-hidden hover:border-hades-red/20 transition-all duration-500"
            >
              {/* Logo image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={sauce.image}
                  alt={sauce.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hades-card via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-1">
                  {sauce.name}
                </h3>
                <p className={`text-sm font-display tracking-wider uppercase bg-gradient-to-r ${sauce.accent} bg-clip-text text-transparent mb-4`}>
                  {sauce.tagline}
                </p>
                <p className="text-white/60 leading-relaxed mb-6">
                  {sauce.description}
                </p>

                {/* Heat meter */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-white/40 font-display uppercase tracking-wider">Heat</span>
                  <div className="flex gap-1">
                    {Array.from({ length: sauce.maxHeat }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-1.5 rounded-full ${
                          i < sauce.heat
                            ? "bg-gradient-to-r from-hades-orange to-hades-red"
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottle showcase */}
        <div className="mt-16 md:mt-20 relative">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/bottles-lineup.jpg"
              alt="Hades Hot Sauce bottle lineup"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hades-black via-transparent to-hades-black/40" />
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
              <p className="font-display text-lg md:text-xl text-hades-gold/80">
                &ldquo;Every bottle hand-labeled. Every batch slightly different. Consistency is for factories.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      image: "/raw-peppers.jpg",
      title: "Grow the Peppers",
      description: "Habaneros and bhut orange Copenhagen (BOC) ghost peppers, grown from seed in Boston. Yes, personally. It's a whole thing.",
    },
    {
      image: "/pepper-crosssection.jpg",
      title: "Make the Sauce",
      description: "Peppers get blended with a carrot base — that's the secret to the color and the flavor. Everything by hand, in small batches, in a regular kitchen.",
    },
    {
      image: "/fresh-batch-unlabeled.jpg",
      title: "Bottle It Up",
      description: "Bottled, hand-labeled, and given away. No warehouse. No fulfillment center. Just a guy with a funnel and some free time.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 section-glow">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-fire-gradient mb-4">
            The Process
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Grow peppers. Make sauce. Give it away. It&apos;s not complicated.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="group">
              <div className="relative rounded-xl overflow-hidden mb-5 aspect-[4/3]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hades-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-display text-4xl font-bold text-hades-gold/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-hades-gold">
                {step.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToGetSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 section-glow">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-fire-gradient mb-6">
          How to Get Some
        </h2>

        <div className="bg-hades-card border border-white/5 rounded-2xl p-8 md:p-12">
          <p className="text-2xl md:text-3xl font-display text-white/90 mb-6 leading-snug">
            There&apos;s no buy button.
            <br />
            <span className="text-hades-gold">How to get some: know a guy.</span>
          </p>

          <div className="w-16 h-px bg-gradient-to-r from-transparent via-hades-red to-transparent mx-auto mb-6" />

          <p className="text-white/50 leading-relaxed mb-8 max-w-lg mx-auto">
            This isn&apos;t a business. It&apos;s a hobby that got out of hand. Every bottle goes to friends, family, or
            <a href="https://www.cloudzero.com" target="_blank" rel="noopener noreferrer" className="text-hades-gold hover:text-hades-orange transition-colors"> CloudZero</a> customers.
            That&apos;s the whole distribution strategy.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 text-center">
            {[
              { icon: "🤝", label: "Know a guy" },
              { icon: "☁️", label: "Be a CloudZero customer" },
              { icon: "🤷", label: "Good luck otherwise" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.02] border border-white/5 rounded-xl p-4"
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <span className="text-sm text-white/40 font-display">{item.label}</span>
              </div>
            ))}
          </div>

          <p className="text-white/30 text-sm mt-8 font-display">
            (Seriously though, you can&apos;t buy it. We&apos;ve been asked.)
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-hades-red text-lg">🔥</span>
          <span className="font-display text-sm text-white/40 tracking-wider uppercase">
            Forged in Boston
          </span>
        </div>

        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Hades Hot Sauce. Not a real company. Just a guy with too many peppers.
        </p>

        <a
          href="https://x.com/Bunch_of_Brady"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/30 hover:text-hades-gold transition-colors text-sm font-display"
        >
          @Bunch_of_Brady
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="relative">
      <EmberParticles />
      <div className="relative z-10">
        <HeroSection />
        <SaucesSection />
        <ProcessSection />
        <HowToGetSection />
        <Footer />
      </div>
    </main>
  );
}
