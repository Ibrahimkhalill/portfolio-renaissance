export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-7xl mx-auto section-padding flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ibrahim Khalil. Crafted with care.
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          Built with React · Three.js · TanStack Start
        </p>
      </div>
    </footer>
  );
}
