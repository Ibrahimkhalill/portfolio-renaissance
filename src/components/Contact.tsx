import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

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
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:ibrahim@example.com?subject=${subject}&body=${body}`;
    }, 600);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader eyebrow="Get in touch" title="Let's build something." />
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              I'm currently available for freelance work and full-time
              opportunities. Drop a line and I'll respond within 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              <ContactItem
                icon={<Mail className="w-4 h-4" />}
                label="Email"
                value="ibrahim@example.com"
              />
              <ContactItem
                icon={<MapPin className="w-4 h-4" />}
                label="Location"
                value="Available remotely"
              />
            </div>

            <div className="mt-10 flex items-center gap-3">
              <a
                href="https://github.com/Ibrahimkhalill"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-surface transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-surface transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="card-gradient border border-border/50 rounded-2xl p-7 space-y-5"
          >
            <Field
              label="Your name"
              value={form.name}
              onChange={(v) => setForm({ ...form, name: v })}
              placeholder="John Doe"
              required
            />
            <Field
              label="Email address"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              placeholder="john@example.com"
              required
            />
            <div>
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
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-primary text-primary-foreground font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-60"
            >
              {loading ? "Sending…" : (
                <>
                  Send message <Send className="w-4 h-4" />
                </>
              )}
            </button>
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
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
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
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
