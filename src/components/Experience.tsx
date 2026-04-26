import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import { SectionHeader } from "./About";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader eyebrow="What I've done" title="Experience" />

        <div className="mt-16 relative">
          {/* timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company_name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex flex-col sm:flex-row gap-6 sm:gap-12 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full gradient-primary ring-4 ring-background z-10" />

                <div className="sm:w-1/2 pl-12 sm:pl-0 sm:px-8">
                  <div className="card-gradient rounded-2xl p-6 border border-border/50 hover:border-primary/40 transition-colors hover:shadow-[var(--shadow-card)]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/95 flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={exp.icon}
                          alt={exp.company_name}
                          className="w-9 h-9 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{exp.title}</h3>
                        <p className="text-primary text-sm font-medium">
                          {exp.company_name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                          <Briefcase className="w-3 h-3" />
                          {exp.date}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
