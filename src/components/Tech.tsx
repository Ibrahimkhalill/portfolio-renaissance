import { motion } from "framer-motion";
import { technologies } from "@/data/portfolio";
import { SectionHeader } from "./About";
import { BallCanvas } from "./BallCanvas";

export function Tech() {
  return (
    <section id="tech" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <SectionHeader
          eyebrow="My toolkit"
          title="Tech stack"
          subtitle="Interactive 3D representation of the technologies I work with daily — drag to rotate."
        />

        <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 sm:gap-8">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30, scale: 0.7 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: (i % 7) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28">
                <BallCanvas icon={tech.icon} />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors text-center font-medium">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
