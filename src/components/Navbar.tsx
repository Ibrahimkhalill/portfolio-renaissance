import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto section-padding flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1 group">
          <img
            src="/brand-logo.png"
            alt="Ibrahim Hossen"
            width={27}
            height={27}
            className=" object-contain group-hover:scale-110 transition-transform"
          />
          <span className="font-display font-semibold text-lg hidden sm:block">Ibrahim Hossen</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.title}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Ibrahimkhalill"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-surface transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/mdibrahimhossen"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:bg-surface transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-surface"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass mt-3 mx-4 rounded-xl p-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground"
                >
                  {l.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
