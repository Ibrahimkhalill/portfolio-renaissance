export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 mt-20">
      <div className="max-w-7xl mx-auto section-padding flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left side - Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/brand-logo.png"
            alt="Ibrahim Hossen"
            className="h-8 w-8 object-contain rounded-md ring-1 ring-border/60"
          />
          <div className="text-sm">
            <p className="font-medium text-foreground">Md. Ibrahim Hossen</p>
            <p className="text-muted-foreground text-xs">Full Stack • AI • Backend Engineer</p>
          </div>
        </div>

        {/* Middle - Copyright */}
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Right side - Links (optional future use) */}
        <div className="flex gap-4 text-xs text-muted-foreground"></div>
      </div>
    </footer>
  );
}
