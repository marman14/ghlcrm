import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Calendar, Check, MessageSquare, Phone, Sparkles, Workflow, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GHLCRM — All-in-one CRM, Marketing & Automation" },
      { name: "description", content: "Capture leads, automate marketing, and close more deals with GHLCRM. Sub-accounts, AI, pipelines and more." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Features />
      <SubAccounts />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Built for agencies & growing businesses
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
            The all-in-one <span className="text-gradient">CRM platform</span> your business deserves
          </h1>
          <p className="mt-6 text-lg text-muted-foreground md:text-xl">
            GHLCRM brings your funnels, automations, calls, SMS, email and pipelines under one roof — with sub-accounts to manage unlimited clients.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">
              Start your plan <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/features" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 text-base font-medium hover:bg-card">
              See features
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">No credit card required • Cancel anytime</p>
        </div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="rounded-2xl border border-border bg-gradient-card p-2 shadow-elegant">
            <div className="rounded-xl bg-background/60 p-6">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { label: "Active leads", value: "12,438", trend: "+24%" },
                  { label: "Conversations", value: "3,902", trend: "+18%" },
                  { label: "Revenue this month", value: "$184,210", trend: "+31%" },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg border border-border/60 bg-card/60 p-4">
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                    <div className="mt-1 font-display text-2xl font-bold">{s.value}</div>
                    <div className="mt-1 text-xs text-primary">{s.trend} vs last month</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-2">
                {["New lead • Sarah from Acme just booked a call", "Automation • Welcome sequence triggered (38)", "Pipeline • Deal moved to Won — $4,200"].map((row) => (
                  <div key={row} className="flex items-center gap-3 rounded-lg border border-border/40 bg-background/40 px-4 py-3 text-sm">
                    <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
                    <span className="text-muted-foreground">{row}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoStrip() {
  const brands = ["Acme Co", "Northwind", "Globex", "Initech", "Umbrella", "Stark Inc"];
  return (
    <section className="border-y border-border/60 bg-card/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">Trusted by 25,000+ teams worldwide</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {brands.map((b) => (
            <span key={b} className="font-display text-lg font-semibold text-muted-foreground">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: MessageSquare, title: "Unified inbox", desc: "SMS, email, WhatsApp, Instagram & FB DMs in one place." },
  { icon: Workflow, title: "Visual automations", desc: "Drag-and-drop workflows that nurture leads 24/7." },
  { icon: Calendar, title: "Smart scheduling", desc: "Calendars, round-robin & reminders that fill your pipeline." },
  { icon: Phone, title: "Built-in calling", desc: "Two-way calls, call tracking & recording out of the box." },
  { icon: Bot, title: "AI assistant", desc: "Reply, summarize and qualify leads with built-in AI." },
  { icon: Zap, title: "Funnels & sites", desc: "Beautiful funnels, websites and forms with no code." },
];

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold md:text-5xl">Everything you need. <span className="text-gradient">Nothing you don't.</span></h2>
        <p className="mt-4 text-muted-foreground">Replace 8+ tools with one platform built for marketers, agencies and sales teams.</p>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="group rounded-2xl border border-border bg-gradient-card p-6 transition-all hover:border-primary/40 hover:shadow-glow">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-soft">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SubAccounts() {
  return (
    <section className="bg-card/30 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Agency-ready
          </span>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Create unlimited <span className="text-gradient">sub-accounts</span></h2>
          <p className="mt-4 text-muted-foreground">
            Manage every client in their own workspace. White-label everything, give clients limited access, and scale without chaos.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "One dashboard to rule all client accounts",
              "White-label domain, login & mobile app",
              "Snapshot templates — clone setups in 1 click",
              "Granular roles & permissions per user",
            ].map((i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm">{i}</span>
              </li>
            ))}
          </ul>
          <Link to="/pricing" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow">
            Get the Ultimate plan <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-elegant">
          <div className="text-xs text-muted-foreground">Sub-accounts</div>
          <div className="mt-3 space-y-2">
            {[
              ["Bright Dental Co", "Active", "$2,140 MRR"],
              ["Peak Real Estate", "Active", "$1,820 MRR"],
              ["Lumen Med Spa", "Active", "$3,650 MRR"],
              ["Forge Fitness", "Trial", "—"],
            ].map(([name, status, mrr]) => (
              <div key={name} className="flex items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{name}</div>
                    <div className="text-xs text-muted-foreground">{status}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold">{mrr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { quote: "We replaced 6 tools and saved $1,400/mo. The sub-account system is a game changer for our agency.", name: "Maya Patel", role: "Founder, Pixel Agency" },
    { quote: "Built our entire client onboarding in a weekend. Automations just work.", name: "Daniel Rivera", role: "CEO, Growth Forge" },
    { quote: "The unified inbox alone is worth the price. Our reply times dropped 80%.", name: "Sasha Kim", role: "Head of Sales, Lumen" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-center text-4xl font-bold md:text-5xl">Loved by <span className="text-gradient">teams that ship</span></h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <div key={t.name} className="rounded-2xl border border-border bg-gradient-card p-6">
            <p className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
            <div className="mt-6">
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-12 text-center shadow-elegant">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative">
          <h2 className="text-4xl font-bold md:text-5xl">Ready to scale with <span className="text-gradient">GHLCRM?</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Start with our Ultimate plan from just $49 — sub-accounts included.</p>
          <Link to="/pricing" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-7 py-3 text-base font-semibold text-primary-foreground shadow-glow">
            View pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
