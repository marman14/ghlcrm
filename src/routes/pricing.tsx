import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Crown, Sparkles, Infinity as InfinityIcon } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — GHLCRM Ultimate Plan" },
      { name: "description", content: "GHLCRM Ultimate plan — $49 / 3 months, $99 / year, or $199 lifetime. Includes sub-accounts and every feature." },
      { property: "og:title", content: "Pricing — GHLCRM" },
      { property: "og:description", content: "Simple Ultimate pricing. Sub-accounts included." },
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

const plans = [
  {
    name: "Ultimate Quarterly",
    price: 49,
    period: "/ 3 months",
    badge: "Try it",
    icon: Sparkles,
    cta: "Start 3-month plan",
  },
  {
    name: "Ultimate Yearly",
    price: 99,
    period: "/ year",
    badge: "Most popular",
    featured: true,
    icon: Crown,
    cta: "Get yearly access",
  },
  {
    name: "Ultimate Lifetime",
    price: 199,
    period: "one-time",
    badge: "Best value",
    icon: InfinityIcon,
    cta: "Pay once, own forever",
  },
];

function PricingPage() {
  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold md:text-6xl">Simple, <span className="text-gradient">honest pricing</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">
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
                  p.featured ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground"
                }`}>
                  {p.badge}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold">${p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              <Link
                to="/contact"
                className={`mt-6 block w-full rounded-xl px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "border border-border bg-card hover:bg-card/80"
                }`}
              >
                {p.cta}
              </Link>
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
          <p className="mt-2 text-sm text-muted-foreground">
            Whether you're a freelancer, an agency or a multi-brand business — create as many client workspaces as you need at no extra cost.
          </p>
        </div>

        <FAQ />
      </div>
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
            <p className="mt-3 text-sm text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
