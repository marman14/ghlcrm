import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Calendar, Check, MessageSquare, Phone, Workflow, Zap, Users, BarChart3, Globe, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GHLCRM — The AI-powered business operating system" },
      { name: "description", content: "All the tools you need to capture, nurture and close new leads into bookings, sales, reviews and repeat customers." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Features />
      <SubAccounts />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pb-32 pt-20 md:pt-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur">
            <Zap className="h-4 w-4" style={{ color: "oklch(0.78 0.16 235)" }} />
            Power up your business with AI
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            The AI-powered<br />business operating<br />system
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/75">
            All the tools you need to capture, nurture and close new leads into bookings, sales, reviews and repeat customers.
          </p>
          <div className="mt-10">
            <Link to="/pricing" className="inline-flex items-center gap-3 rounded-full btn-dark px-6 py-3.5 text-base font-medium">
              View plans & get started
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-background">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        <div className="relative">
          <DashboardMock />
        </div>
      </div>

      <div className="relative mx-auto mt-20 max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { v: "7M+", l: "AI Voice Calls" },
            { v: "7.3B", l: "Leads Generated" },
            { v: "179M", l: "Appointments Booked" },
            { v: "$5.2B+", l: "Sales Facilitated in 2025" },
          ].map((s) => (
            <div key={s.l} className="stat-card rounded-2xl p-6 text-center">
              <div className="font-display text-4xl font-bold tracking-tight">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="relative rotate-[-2deg] rounded-2xl border border-white/15 bg-card/90 shadow-elegant backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <div className="ml-3 text-xs text-white/50">app.ghlcrm.com / dashboard</div>
      </div>
      <div className="grid grid-cols-[140px_1fr] gap-0">
        <aside className="border-r border-white/10 p-3 text-xs">
          {["Launch Pad", "Dashboard", "Conversations", "Calendars", "Contacts", "Opportunities", "Payments", "Marketing", "Automation", "Sites", "Reputation", "Reporting"].map((i, idx) => (
            <div key={i} className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${idx === 10 ? "bg-white/10 text-white" : "text-white/60"}`}>
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              {i}
            </div>
          ))}
        </aside>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-white/50">Reputation Management</div>
              <div className="font-display text-base font-semibold">Overview</div>
            </div>
            <button className="rounded-md bg-gradient-blue px-3 py-1 text-[10px] font-medium text-white">Send Review Request</button>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              { l: "Invites Goal", v: "1.4K", t: "+40%" },
              { l: "Reviews Received", v: "1,210", t: "-10% vs last" },
              { l: "Sentiment", v: "900 / 300", t: "+100%" },
            ].map((c) => (
              <div key={c.l} className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
                <div className="text-[9px] text-white/50">{c.l}</div>
                <div className="mt-1 font-display text-base font-bold">{c.v}</div>
                <div className="mt-0.5 text-[9px]" style={{ color: "oklch(0.78 0.16 235)" }}>{c.t}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
              <div className="text-[10px] text-white/50">Average Ratings</div>
              <div className="mt-2 flex items-end gap-1">
                {[40, 60, 80, 50, 30].map((h, i) => (
                  <div key={i} className="w-3 rounded-sm bg-gradient-blue" style={{ height: `${h}px` }} />
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
              <div className="text-[10px] text-white/50">Online Listings</div>
              <div className="mt-2 flex justify-center">
                <div className="relative h-16 w-16 rounded-full" style={{ background: "conic-gradient(oklch(0.65 0.20 245) 0 60%, oklch(0.78 0.16 235) 60% 80%, oklch(0.30 0.05 245) 80% 100%)" }}>
                  <div className="absolute inset-2 rounded-full bg-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  { icon: MessageSquare, title: "Unified inbox", desc: "SMS, email, WhatsApp, Instagram & FB DMs in one place." },
  { icon: Workflow, title: "Visual automations", desc: "Drag-and-drop workflows that nurture leads 24/7." },
  { icon: Calendar, title: "Smart scheduling", desc: "Calendars, round-robin & reminders that fill your pipeline." },
  { icon: Phone, title: "Built-in calling", desc: "Two-way calls, call tracking & recording out of the box." },
  { icon: Bot, title: "AI assistant", desc: "Reply, summarize and qualify leads with built-in AI." },
  { icon: Globe, title: "Funnels & sites", desc: "Beautiful funnels, websites and forms with no code." },
  { icon: BarChart3, title: "Pipelines & deals", desc: "Visual Kanban with revenue forecasting." },
  { icon: Users, title: "Sub-accounts", desc: "Unlimited client workspaces under one master login." },
  { icon: Sparkles, title: "White-label", desc: "Your domain, your logo, your mobile app." },
];

function Features() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
            All-in-one platform
          </span>
          <h2 className="mt-5 text-4xl font-bold md:text-5xl">Everything you need.<br /><span className="text-gradient">Nothing you don't.</span></h2>
          <p className="mt-4 text-muted-foreground">Replace 8+ tools with one platform built for marketers, agencies and sales teams.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-card p-6 transition-all hover:border-primary/40 hover:shadow-glow">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-blue">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubAccounts() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-foreground">
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
                <Check className="mt-0.5 h-5 w-5" style={{ color: "oklch(0.78 0.16 235)" }} />
                <span className="text-sm">{i}</span>
              </li>
            ))}
          </ul>
          <Link to="/pricing" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-blue px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            Get the Ultimate plan <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-2xl border border-white/10 bg-card p-6 shadow-elegant">
          <div className="text-xs uppercase tracking-widest text-white/50">Sub-accounts</div>
          <div className="mt-3 space-y-2">
            {[
              ["Bright Dental Co", "Active", "$2,140 MRR"],
              ["Peak Real Estate", "Active", "$1,820 MRR"],
              ["Lumen Med Spa", "Active", "$3,650 MRR"],
              ["Forge Fitness", "Trial", "—"],
            ].map(([name, status, mrr]) => (
              <div key={name} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-blue text-sm font-bold text-white">
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
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold md:text-5xl">Loved by <span className="text-gradient">teams that ship</span></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-card p-6">
              <p className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-6">
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-background pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 text-center shadow-elegant" style={{ background: "var(--gradient-hero)" }}>
          <h2 className="text-4xl font-bold md:text-5xl">Ready to scale with <span className="text-gradient">GHLCRM?</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">Start with our Ultimate plan from just $49 — sub-accounts included.</p>
          <Link to="/pricing" className="mt-8 inline-flex items-center gap-2 rounded-full btn-dark px-7 py-3 text-base font-medium">
            View pricing <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
