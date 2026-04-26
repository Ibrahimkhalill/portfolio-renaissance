import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

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
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-primary/30 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-[140px] animate-pulse" />

      <div className="relative max-w-7xl mx-auto section-padding w-full grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-muted-foreground">
              Available for new opportunities
            </span>
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
              web & mobile experiences.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Full Stack Developer crafting scalable products with React, Next.js,
            Django, and modern AI integrations — from idea to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-primary text-primary-foreground font-medium shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-surface transition-colors"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-8 pt-6"
          >
            <Stat label="Years" value="2+" />
            <div className="w-px h-10 bg-border" />
            <Stat label="Projects" value="20+" />
            <div className="w-px h-10 bg-border" />
            <Stat label="Tech stack" value="13+" />
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-[420px] h-[420px]">
            <div className="absolute inset-0 rounded-full gradient-primary opacity-20 blur-3xl animate-pulse" />
            <div className="absolute inset-8 rounded-full glass animate-float flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-primary/30" />
              <div className="absolute inset-12 rounded-full border border-primary/20" />
              <div className="text-8xl font-display font-bold gradient-text">I</div>
            </div>
            {/* Orbiting dots */}
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <div
                key={deg}
                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_var(--primary)]"
                style={{
                  transform: `rotate(${deg}deg) translateX(210px) translateY(-50%)`,
                }}
              />
            ))}
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
    <div>
      <div className="text-2xl font-display font-bold gradient-text">{value}</div>
      <div className="text-xs text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}
