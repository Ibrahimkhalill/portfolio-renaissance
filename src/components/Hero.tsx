import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Twitter, ArrowRight, Moon, Sun } from "lucide-react";
import gsap from "gsap";
import profileImg from "@/assets/profile.png";

const NAV_ITEMS = ["Home", "Work", "Skills", "Contact"];

function splitTextToChars(text: string): string {
  return text
    .split("")
    .map((ch) =>
      ch === " "
        ? '<span class="hero-char inline-block">&nbsp;</span>'
        : `<span class="hero-char inline-block">${ch}</span>`
    )
    .join("");
}

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", !dark);
  }, [dark]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Nav links stagger
      gsap.from(".hero-nav-link", {
        y: -20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.2,
      });

      // 2. Headline char-by-char
      if (headlineRef.current) {
        headlineRef.current.innerHTML = splitTextToChars(
          headlineRef.current.textContent || ""
        );
        gsap.from(".hero-char", {
          y: 60,
          opacity: 0,
          stagger: 0.04,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.5,
        });
      }

      // 3. Subtitle fade
      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.4,
      });

      // 4. Social icons slide in
      gsap.from(".hero-social-icon", {
        x: -30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
        delay: 1.6,
      });

      // 5. 3D orb rotation
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          rotationY: 360,
          duration: 8,
          repeat: -1,
          ease: "none",
          transformPerspective: 800,
        });
      }

      // 6. CTA button pulse
      gsap.to(".hero-cta", {
        boxShadow: "0 0 30px rgba(0,255,200,0.5), 0 0 60px rgba(0,255,200,0.2)",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 8. Floating particles
      if (particlesRef.current) {
        const dots = particlesRef.current.querySelectorAll(".particle-dot");
        dots.forEach((dot) => {
          gsap.to(dot, {
            x: `random(-80, 80)`,
            y: `random(-80, 80)`,
            duration: `random(4, 8)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: `random(0, 3)`,
          });
        });
      }

      // 9. Blob morph / breathe
      if (blobRef.current) {
        gsap.to(blobRef.current, {
          scale: 1.15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // 10. Card entrance
      gsap.from(cardRef.current, {
        scale: 0.92,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Logo + dark mode toggle
      gsap.from(".hero-logo", {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.1,
      });

      gsap.from(".hero-cta-wrap", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        delay: 1.8,
      });

      // Profile image
      gsap.from(".hero-profile", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.4)",
        delay: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => {
      if (!cardRef.current) return;
      const scroll = window.scrollY;
      const factor = Math.min(scroll / 600, 1);
      cardRef.current.style.transform = `scale(${1 - factor * 0.06})`;
      cardRef.current.style.opacity = `${1 - factor * 0.4}`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-8"
    >
      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle-dot absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `rgba(${Math.random() > 0.5 ? "0,255,200" : "100,180,255"},${
                Math.random() * 0.4 + 0.2
              })`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 6px rgba(0,255,200,0.3)`,
            }}
          />
        ))}
      </div>

      {/* Main glassmorphism card */}
      <div
        ref={cardRef}
        className="hero-card relative w-full max-w-7xl rounded-[2rem] sm:rounded-[3rem] overflow-hidden"
        style={{ willChange: "transform, opacity" }}
      >
        {/* Decorative glowing blob */}
        <div
          ref={blobRef}
          className="absolute -left-20 top-1/3 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,200,0.25) 0%, rgba(0,200,170,0.08) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Card inner */}
        <div className="hero-card-inner relative z-10 p-6 sm:p-10 lg:p-14">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-12 sm:mb-16">
            {/* Logo */}
            <div className="hero-logo flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ffc8] to-[#0088ff] flex items-center justify-center">
                <span className="text-black font-bold text-lg font-display">I</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg leading-none hero-name-text">
                  Ibrahim
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] hero-subtitle-label">
                  Portfolio
                </div>
              </div>
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDark((d) => !d)}
              className="hero-toggle p-2.5 rounded-full transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Hero content grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[400px] sm:min-h-[500px]">
            {/* Left */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h1
                  ref={headlineRef}
                  className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.95] tracking-tight"
                >
                  CRAFTING DIGITAL MAGIC
                </h1>
                <p className="hero-subtitle mt-4 sm:mt-6 text-base sm:text-lg max-w-md hero-body-text">
                  Full Stack Developer & AI Engineer — building immersive digital
                  experiences from concept to deployment.
                </p>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-4">
                <span className="hero-social-icon text-xs uppercase tracking-widest hero-muted-text">
                  Follow me
                </span>
                <div className="flex items-center gap-2">
                  {[
                    { icon: Github, href: "https://github.com/Ibrahimkhalill" },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/mdibrahimhossen",
                    },
                    { icon: Twitter, href: "#" },
                  ].map(({ icon: Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="hero-social-icon hero-social-btn w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — 3D orb + profile */}
            <div className="relative flex items-center justify-center">
              {/* Orb glow background */}
              <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full hero-orb-bg" />

              {/* 3D rotating orb */}
              <div
                ref={orbRef}
                className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]"
                style={{ transformStyle: "preserve-3d", perspective: "800px" }}
              >
                {/* Orb rings */}
                {[0, 60, 120].map((rot, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full hero-orb-ring"
                    style={{
                      transform: `rotateX(${rot}deg) rotateY(${rot * 0.5}deg)`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}

                {/* Profile in center */}
                <div className="hero-profile absolute inset-8 sm:inset-12 rounded-full overflow-hidden shadow-2xl ring-2 hero-profile-ring">
                  <img
                    src={profileImg}
                    alt="Ibrahim Khalil — portrait"
                    className="w-full h-full object-cover object-top scale-110"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating tech badges */}
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 hero-badge px-3 py-1.5 rounded-full text-xs font-medium animate-float">
                ✨ AI Engineer
              </div>
              <div
                className="absolute bottom-8 left-0 sm:bottom-12 sm:left-4 hero-badge px-3 py-1.5 rounded-full text-xs font-medium animate-float"
                style={{ animationDelay: "1s" }}
              >
                🚀 React · Next.js
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="hero-cta-wrap flex flex-col sm:flex-row items-center justify-between mt-12 sm:mt-16 gap-6">
            <div className="flex items-center gap-6">
              {[
                { value: "4+", label: "Years" },
                { value: "50+", label: "Projects" },
                { value: "15+", label: "Tech" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-display font-bold hero-stat-value">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest hero-muted-text">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#work"
              className="hero-cta inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
