import { createFileRoute } from "@tanstack/react-router";
import { Check, Crown, Sparkles, Infinity as InfinityIcon, Copy, X } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — GHLCRM Ultimate Plan" },
      { name: "description", content: "GHLCRM Ultimate plan — $49 / 3 months, $99 / year, or $199 lifetime. Sub-accounts included." },
    ],
  }),
  component: PricingPage,
});

const features = [
  "Unlimited contacts & users",
  "Unlimited sub-accounts",
  "Unified inbox (SMS, Email, WhatsApp, DMs)",
  "Workflow automations & triggers",
  "Funnels, websites & forms builder",
  "Calendars & smart scheduling",
  "Built-in calling & SMS",
  "AI assistant for replies & content",
  "White-label domain & branding",
  "Priority support",
];

type Plan = {
  name: string;
  price: number;
  original: number;
  period: string;
  badge: string;
  featured?: boolean;
  icon: typeof Sparkles;
  cta: string;
  href: string;
  id: "quarterly" | "yearly" | "lifetime";
};

const plans: Plan[] = [
  {
    id: "quarterly",
    name: "Ultimate Quarterly",
    price: 49,
    original: 297,
    period: "/ 3 months",
    badge: "Try it",
    icon: Sparkles,
    cta: "Get 3-month plan",
    href: "https://buy.stripe.com/00w3cw2dT0YTek02d19R60t",
  },
  {
    id: "yearly",
    name: "Ultimate Yearly",
    price: 99,
    original: 1188,
    period: "/ year",
    badge: "Most popular",
    featured: true,
    icon: Crown,
    cta: "Get yearly access",
    href: "https://buy.stripe.com/dRmcN6f0F6jd5Nu3h59R60u",
  },
  {
    id: "lifetime",
    name: "Ultimate Lifetime",
    price: 199,
    original: 2997,
    period: "one-time",
    badge: "Best value",
    icon: InfinityIcon,
    cta: "Pay once, own forever",
    href: "https://buy.stripe.com/fZubJ25q56jd6Ry7xl9R60v",
  },
];

function PricingPage() {
  const [showOffer, setShowOffer] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleYearlyClick = () => {
    // Show downsell modal — the link still opens Stripe in a new tab
    setShowOffer(true);
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText("LTD20");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold md:text-6xl">Simple, <span className="text-gradient">honest pricing</span></h1>
          <p className="mt-4 text-lg text-white/80">
            One plan. Every feature. Sub-accounts included. Pick the term that fits.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 transition-all ${
                p.featured
                  ? "border-primary/60 bg-gradient-card shadow-glow md:scale-105"
                  : "border-border bg-gradient-card hover:border-primary/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-soft">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                  p.featured ? "bg-primary text-primary-foreground" : "border border-border text-white/70"
                }`}>
                  {p.badge}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold">${p.price}</span>
                <span className="text-sm text-white/70">{p.period}</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm">
                <span className="text-white/50 line-through">${p.original}</span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                  Save {Math.round(((p.original - p.price) / p.original) * 100)}%
                </span>
              </div>
              {p.id === "yearly" ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleYearlyClick}
                  className={`mt-6 block w-full rounded-xl px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    p.featured
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "border border-border bg-card hover:bg-card/80"
                  }`}
                >
                  {p.cta}
                </a>
              ) : (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block w-full rounded-xl px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    p.featured
                      ? "bg-gradient-primary text-primary-foreground shadow-glow"
                      : "border border-border bg-card hover:bg-card/80"
                  }`}
                >
                  {p.cta}
                </a>
              )}
              <ul className="mt-8 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-gradient-card p-8 text-center">
          <h3 className="text-2xl font-semibold">All plans include sub-accounts</h3>
          <p className="mt-2 text-sm text-white/70">
            Whether you're a freelancer, an agency or a multi-brand business — create as many client workspaces as you need at no extra cost.
          </p>
        </div>

        <FAQ />
      </div>

      {showOffer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-primary/40 bg-gradient-card p-8 shadow-elegant">
            <button
              onClick={() => setShowOffer(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Before you go — 20% off Lifetime
              </span>
              <h3 className="mt-4 text-3xl font-bold">
                Get the <span className="text-gradient">Lifetime plan</span> for just $79
              </h3>
              <p className="mt-3 text-sm text-white/75">
                Copy this code and use it at checkout to lock in Lifetime GoHighLevel access before the wholesale slots are gone.
              </p>

              <div className="mt-6 flex items-center justify-between gap-3 rounded-xl border border-dashed border-primary/50 bg-background/50 p-4">
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-widest text-white/50">Click to copy code</div>
                  <div className="font-display text-2xl font-bold tracking-widest">LTD20</div>
                </div>
                <button
                  onClick={copyCode}
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
                >
                  <Copy className="h-4 w-4" />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <a
                href="https://buy.stripe.com/fZubJ25q56jd6Ry7xl9R60v"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block w-full rounded-xl bg-gradient-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Get LTD Plan – $79
              </a>
              <a
                href="https://buy.stripe.com/dRmcN6f0F6jd5Nu3h59R60u"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
              >
                No thanks, I'll pay full price.
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const faqs = [
  ["Is the lifetime plan really lifetime?", "Yes. Pay $199 once and use GHLCRM forever, including all future updates."],
  ["Can I create sub-accounts on every plan?", "Absolutely. Sub-accounts are unlimited on all three Ultimate plans."],
  ["Do you offer refunds?", "Yes — 14-day money-back guarantee, no questions asked."],
  ["Can I switch plans later?", "Of course. Upgrade from quarterly to yearly or lifetime any time and we'll prorate the difference."],
];

function FAQ() {
  return (
    <div className="mx-auto mt-20 max-w-3xl">
      <h2 className="text-center text-3xl font-bold">Frequently asked questions</h2>
      <div className="mt-8 space-y-3">
        {faqs.map(([q, a]) => (
          <details key={q} className="group rounded-xl border border-border bg-card/60 p-5 open:bg-card">
            <summary className="cursor-pointer list-none text-sm font-semibold marker:hidden">
              {q}
            </summary>
            <p className="mt-3 text-sm text-white/75">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
