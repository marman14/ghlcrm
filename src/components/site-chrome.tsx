import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="flex items-end gap-[2px]">
        <span className="block h-4 w-1.5 rounded-sm" style={{ background: "oklch(0.85 0.18 95)" }} />
        <span className="block h-5 w-1.5 rounded-sm" style={{ background: "oklch(0.78 0.20 145)" }} />
        <span className="block h-6 w-1.5 rounded-sm" style={{ background: "oklch(0.70 0.20 245)" }} />
      </div>
      <span className="font-display text-lg font-bold tracking-tight">GHLCRM</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground font-medium" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="rounded-full btn-dark px-5 py-2 text-sm font-medium">
            Login
          </Link>
          <Link to="/pricing" className="rounded-full bg-gradient-blue px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow">
            Start 14-day trial
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            The AI-powered business operating system. All the tools you need to capture, nurture and close.
          </p>
        </div>
        <FooterCol title="Product" links={[["Features", "/features"], ["Pricing", "/pricing"]]} />
        <FooterCol title="Company" links={[["About", "/about"], ["Contact", "/contact"]]} />
        <FooterCol title="Legal" links={[["Terms", "/contact"], ["Privacy", "/contact"]]} />
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GHLCRM. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-3 space-y-2">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-sm text-muted-foreground hover:text-foreground">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
