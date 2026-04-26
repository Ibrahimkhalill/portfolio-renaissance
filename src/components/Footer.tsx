export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-7xl mx-auto section-padding flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-3 text-sm text-muted-foreground">
          <img
            src="/brand-logo.png"
            alt="Ibrahim Hossen"
            width={28}
            height={28}
            className="h-7 w-7 object-contain rounded-md ring-1 ring-border/60 opacity-90"
          />
          <span>© {new Date().getFullYear()} Ibrahim Hossen. Crafted with care.</span>
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          Built with React · Three.js · TanStack Start
        </p>
      </div>
    </footer>
  );
}
