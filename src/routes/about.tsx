import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GHLCRM" },
      { name: "description", content: "GHLCRM is on a mission to give every agency and small business the tools that used to belong to enterprises." },
      { property: "og:title", content: "About — GHLCRM" },
      { property: "og:description", content: "Our mission and the team behind GHLCRM." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-5xl font-bold md:text-6xl">Built for the <span className="text-gradient">underdogs</span>.</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          GHLCRM started with a simple idea: agencies and small businesses shouldn't have to stitch together 10 different tools just to run their operations. We built one platform that does it all — CRM, automations, calling, funnels, payments and AI — and made it ridiculously affordable.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "25k+", l: "Active businesses" },
            { n: "120M+", l: "Messages sent" },
            { n: "$1.2B", l: "Revenue tracked" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-gradient-card p-6 text-center">
              <div className="font-display text-4xl font-bold text-gradient">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-6 text-foreground/90">
          <h2 className="text-3xl font-bold">Our mission</h2>
          <p className="text-muted-foreground">
            Empower one million businesses to grow without enterprise complexity or pricing. We obsess over making powerful tools feel simple, and we ship updates every week based on what our community needs.
          </p>
          <h2 className="text-3xl font-bold">Our values</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {[
              ["Customer-obsessed", "Every roadmap decision starts with our community."],
              ["Ship fast", "Small, fearless teams shipping weekly."],
              ["Honest pricing", "No surprises, no upsells, no contracts."],
              ["Build to last", "Lifetime customers deserve lifetime support."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-xl border border-border bg-card/60 p-5">
                <div className="font-semibold">{t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
