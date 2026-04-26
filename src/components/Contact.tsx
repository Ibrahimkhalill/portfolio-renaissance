import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { Mail, MapPin, Send, Github, Linkedin, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { StarsCanvas } from "./StarsCanvas";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message ready! Opening your email client…");
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name} (${form.email})`,
      );
      window.location.href = `mailto:ibrahim@example.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden isolate"
    >
      {/* 3D starfield background */}
      <div className="absolute inset-0 -z-10">
        <StarsCanvas />
      </div>

      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-primary/20 blur-[140px] -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-accent/20 blur-[160px] -z-10"
      />

      <div className="relative max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              eyebrow="Get in touch"
              title="Let's build something."
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 text-muted-foreground leading-relaxed max-w-md"
            >
              I'm currently available for freelance work and full-time
              opportunities. Drop a line and I'll respond within 24 hours.
            </motion.p>

            <div className="mt-10 space-y-5">
              <ContactItem
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                value="ibrahim@example.com"
                delay={0.2}
              />
              <ContactItem
                icon={<MapPin className="w-4 h-4" />}
                label="Location"
                value="Available remotely"
                delay={0.3}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-10 flex items-center gap-3"
            >
              {[
                {
                  href: "https://github.com/Ibrahimkhalill",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map(({ href, icon: Icon, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ y: -6, scale: 1.12, rotate: 6 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:border-primary/60 hover:text-primary hover:shadow-[0_0_20px_var(--primary)] transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 60, rotateY: 8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={onSubmit}
            className="relative card-gradient border border-border/50 rounded-2xl p-7 space-y-5 hover:border-primary/40 transition-colors backdrop-blur-xl [perspective:1200px]"
          >
            {/* Animated gradient border on hover */}
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-accent/30 opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <Field
              label="Your name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="John Doe"
              required
              delay={0.15}
            />
            <Field
              label="Email address"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="john@example.com"
              required
              delay={0.25}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <label className="text-sm font-medium mb-2 block text-muted-foreground">
                Message
              </label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                placeholder="Tell me about your project…"
                className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none text-sm"
              />
            </motion.div>
            <motion.button
              type="submit"
              disabled={loading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send message{" "}
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.span>
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  delay = 0,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <label className="text-sm font-medium mb-2 block text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
      />
    </motion.div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  delay = 0,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 8 }}
      className="flex items-center gap-4 group cursor-default"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.5 }}
        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_var(--primary)] transition-all"
      >
        {icon}
      </motion.div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </motion.div>
  );
}
