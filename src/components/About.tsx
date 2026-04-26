import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { services } from "@/data/portfolio";
import { Code2, Sparkles, Server, Cloud } from "lucide-react";

const icons = [Code2, Sparkles, Server, Cloud];

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
          I'm a Full Stack Developer with a passion for building thoughtful,
          scalable products. I specialize in React, Next.js, Django, and AI
          integrations — bringing together clean architecture, smooth UX, and
          production-grade performance. I love turning complex problems into
          elegant interfaces that feel effortless to use.
        </motion.p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <ServiceCard
                key={s.title}
                title={s.title}
                Icon={Icon}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  Icon,
  index,
}: {
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative [perspective:1000px]"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full"
      >
        {/* Animated gradient border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/60 via-accent/40 to-primary-glow/60 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] group-hover:blur-[3px]" />

        <div className="relative card-gradient rounded-2xl p-7 h-full border border-border/50 group-hover:border-transparent transition-colors overflow-hidden">
          {/* Sweeping shine on hover */}
          <div className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Floating icon */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transform: "translateZ(40px)" }}
            className="relative w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-[0_10px_30px_-10px_var(--primary)]"
          >
            <Icon className="w-7 h-7 text-primary-foreground" />
            <div className="absolute inset-0 rounded-2xl gradient-primary opacity-50 blur-xl -z-10" />
          </motion.div>

          <h3
            className="text-lg font-semibold leading-snug"
            style={{ transform: "translateZ(20px)" }}
          >
            {title}
          </h3>

          {/* Bottom accent line */}
          <div className="mt-5 h-[2px] w-10 rounded-full bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
        </div>
      </motion.div>
    </motion.div>
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
      <p className="text-sm uppercase tracking-[0.3em] text-primary font-medium">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
