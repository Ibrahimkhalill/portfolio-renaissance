import { motion } from "framer-motion";
import { services } from "@/data/portfolio";
import { Code2, Sparkles, Server, Cloud } from "lucide-react";

const icons = [Code2, Sparkles, Server, Cloud];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          eyebrow="Introduction"
          title="About me"
        />

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
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="card-gradient rounded-2xl p-[1px] hover:shadow-[var(--shadow-elegant)] transition-all">
                  <div className="bg-card rounded-2xl p-6 h-full border border-border/50 group-hover:border-primary/40 transition-colors">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
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
