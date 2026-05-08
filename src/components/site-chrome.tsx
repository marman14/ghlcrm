import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
            <span className="font-display text-sm font-bold text-primary-foreground">G</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight">GHLCRM</span>
        </Link>
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
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-md px-4 py-2 text-sm text-muted-foreground hover:text-foreground sm:block"
          >
            Sign in
          </Link>
          <Link
            to="/pricing"
            className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Start free
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="font-display text-sm font-bold text-primary-foreground">G</span>
            </div>
            <span className="font-display text-lg font-bold">GHLCRM</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            The all-in-one platform agencies use to capture, nurture and close more clients.
          </p>
        </div>
        <FooterCol title="Product" links={[["Features", "/features"], ["Pricing", "/pricing"]]} />
        <FooterCol title="Company" links={[["About", "/about"], ["Contact", "/contact"]]} />
        <FooterCol title="Legal" links={[["Terms", "/contact"], ["Privacy", "/contact"]]} />
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
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
