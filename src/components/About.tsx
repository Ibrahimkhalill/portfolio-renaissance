import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/portfolio";
import { Code2, Sparkles, Server, Cloud } from "lucide-react";

const icons = [Code2, Sparkles, Server, Cloud];
const aboutStats = [
  {
    title: "Years of Professional Web Development Experience",
    value: 8,
    suffix: "+",
  },
  {
    title: "Successful Websites & Digital Projects Delivered",
    value: 120,
    suffix: "+",
  },
  {
    title: "Industries Served Across Global Business Markets",
    value: 15,
    suffix: "+",
  },
  {
    title: "Long Term Client Trust and Satisfaction",
    value: 100,
    suffix: "%",
  },
];

function AnimatedStatNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const startTime = performance.now();
    let frameId = 0;

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex items-end">
      <motion.span
        initial={{ y: -18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="text-6xl sm:text-7xl font-black leading-none text-foreground/20"
      >
        {displayValue}
      </motion.span>
      <span className="ml-2 text-4xl sm:text-5xl font-black leading-none text-primary">
        {suffix}
      </span>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader eyebrow="Introduction" title="About me" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed"
        >
          I'm a Full Stack Developer with a passion for building thoughtful, scalable products. I
          specialize in React, Next.js, Django, and AI integrations — bringing together clean
          architecture, smooth UX, and production-grade performance. I love turning complex problems
          into elegant interfaces that feel effortless to use.
        </motion.p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 44, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative"
              >
                <div className="rounded-[22px] bg-gradient-to-b from-cyan-400/70 via-violet-500/60 to-fuchsia-500/70 p-[1px] shadow-[0_0_30px_hsl(var(--primary)/0.18)] transition-all duration-500 group-hover:shadow-[0_0_52px_hsl(var(--primary)/0.35)] group-hover:from-cyan-300/85 group-hover:via-violet-400/80 group-hover:to-fuchsia-400/85">
                  <div className="relative overflow-hidden rounded-[21px] min-h-[260px] px-6 py-10 border border-white/5 bg-[linear-gradient(160deg,rgba(8,12,30,0.95),rgba(16,13,43,0.95))] flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%)]" />
                    <div className="relative z-10 w-20 h-20 rounded-2xl mb-8 grid place-items-center bg-gradient-to-br from-cyan-400/20 via-violet-400/20 to-fuchsia-400/20 ring-1 ring-cyan-300/35 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-cyan-200 drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]" />
                    </div>
                    <h3 className="relative z-10 text-2xl font-extrabold leading-tight text-white max-w-[12ch] transition-transform duration-300 group-hover:scale-[1.03]">
                      {s.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">{eyebrow}</p>
      <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground max-w-2xl">{subtitle}</p>}
    </motion.div>
  );
}
