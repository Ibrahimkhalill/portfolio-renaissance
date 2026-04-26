import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { SectionHeader } from "./About";
import { ExternalLink, Github } from "lucide-react";

export function Works() {
  return (
    <section id="work" className="relative py-24 sm:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          eyebrow="My work"
          title="Featured projects"
          subtitle="A selection of products I've designed, built, and shipped."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group card-gradient rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-60" />
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Open project"
                >
                  {p.link.includes("github") ? (
                    <Github className="w-4 h-4" />
                  ) : (
                    <ExternalLink className="w-4 h-4" />
                  )}
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
