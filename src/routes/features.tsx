import { createFileRoute } from "@tanstack/react-router";
import { Bot, Calendar, CreditCard, Globe, MessageSquare, Phone, ShieldCheck, Sparkles, Workflow, Zap, Users, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — GHLCRM" },
      { name: "description", content: "Explore every feature inside GHLCRM: CRM, automations, funnels, calling, AI, sub-accounts and more." },
      { property: "og:title", content: "Features — GHLCRM" },
      { property: "og:description", content: "One platform. Every tool you need." },
    ],
  }),
  component: FeaturesPage,
});

const groups = [
  {
    title: "Capture",
    items: [
      { icon: Globe, name: "Funnels & websites", desc: "Drag-and-drop builder with high-converting templates." },
      { icon: Calendar, name: "Smart calendars", desc: "Round-robin, group & recurring bookings with reminders." },
      { icon: MessageSquare, name: "Forms & surveys", desc: "Capture leads anywhere with smart conditional logic." },
    ],
  },
  {
    title: "Nurture",
    items: [
      { icon: Workflow, name: "Workflow automations", desc: "If-this-then-that across SMS, email, calls and tasks." },
      { icon: Bot, name: "AI assistant", desc: "Auto-reply, summarize conversations and qualify leads." },
      { icon: Phone, name: "2-way SMS & calling", desc: "Track every conversation against the right contact." },
    ],
  },
  {
    title: "Close & scale",
    items: [
      { icon: BarChart3, name: "Pipelines & deals", desc: "Visual Kanban boards with revenue forecasting." },
      { icon: CreditCard, name: "Invoices & payments", desc: "Send invoices, take card payments, run subscriptions." },
      { icon: Users, name: "Sub-accounts", desc: "Unlimited client workspaces under one master login." },
      { icon: ShieldCheck, name: "Roles & permissions", desc: "Granular access for every team member." },
      { icon: Sparkles, name: "White-label", desc: "Your domain, your logo, your mobile app." },
      { icon: Zap, name: "Snapshots", desc: "Clone an entire setup into a new sub-account in 1 click." },
    ],
  },
];

function FeaturesPage() {
  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold md:text-6xl">Everything in <span className="text-gradient">one platform</span></h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop duct-taping tools together. GHLCRM gives you the full stack to capture, nurture and close — at scale.
          </p>
        </div>

        <div className="mt-20 space-y-20">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-3xl font-bold md:text-4xl">{g.title}</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((f) => (
                  <div key={f.name} className="rounded-2xl border border-border bg-gradient-card p-6 transition-all hover:border-primary/40 hover:shadow-glow">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-soft">
                      <f.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{f.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
