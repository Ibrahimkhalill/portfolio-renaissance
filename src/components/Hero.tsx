import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Download } from "lucide-react";
import profileImg from "@/assets/profile.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/30 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-[140px]"
      />

      <div className="relative max-w-7xl mx-auto section-padding w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted-foreground">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Hi, I'm <span className="gradient-text">Ibrahim</span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl font-medium">
              I build AI-powered
            </span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl font-medium">
              web & mobile applications.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Full Stack Developer crafting scalable products with React, Next.js, Django, and modern
            AI integrations — from idea to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-foreground font-medium"
            >
              <Download className="w-4 h-4" /> Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-8 pt-6"
          >
            <Stat label="Years" value="4+" />
            <div className="w-px h-10 bg-border" />
            <Stat label="Projects" value="50+" />
            <div className="w-px h-10 bg-border" />
            <Stat label="Tech stack" value="15+" />
          </motion.div>
        </div>

        {/* Visual — profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px]">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full animate-spin-slow">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30" />
            </div>
            {/* Inner rotating ring */}
            <div className="absolute inset-6 rounded-full animate-spin-reverse">
              <div className="absolute inset-0 rounded-full border border-accent/40" />
            </div>

            {/* Glow halo */}
            <div className="absolute inset-4 rounded-full gradient-primary opacity-30 blur-2xl animate-pulse" />

            {/* Photo container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-10 rounded-full overflow-hidden glass shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/20 via-transparent to-accent/20" />
              <img
                src={profileImg}
                alt="Ibrahim Khalil — portrait"
                className="w-full h-full object-cover object-top scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
            </motion.div>

            {/* Orbiting dots */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <motion.div
                key={deg}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 14 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
                style={{ transformOrigin: "50% 50%" }}
              >
                <div
                  className="absolute top-1/2 left-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]"
                  style={{
                    transform: `rotate(${deg}deg) translateX(220px) translateY(-50%)`,
                  }}
                />
              </motion.div>
            ))}

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 1, duration: 0.5 },
                x: { delay: 1, duration: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-10 -left-2 sm:-left-6 px-3 py-2 rounded-xl glass text-xs font-medium flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              React · Next.js
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, 8, 0] }}
              transition={{
                opacity: { delay: 1.2, duration: 0.5 },
                x: { delay: 1.2, duration: 0.5 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              }}
              className="absolute bottom-16 -right-2 sm:-right-6 px-3 py-2 rounded-xl glass text-xs font-medium flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3 text-primary" />
              AI · Django
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <motion.div whileHover={{ y: -4, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <div className="text-2xl font-display font-bold gradient-text">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}
