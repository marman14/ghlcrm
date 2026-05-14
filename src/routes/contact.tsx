import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GHLCRM" },
      { name: "description", content: "Talk to the GHLCRM team. We respond within 1 business hour." },
      { property: "og:title", content: "Contact — GHLCRM" },
      { property: "og:description", content: "Get in touch with the GHLCRM team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-hero">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold md:text-6xl">Let's <span className="text-gradient">talk</span>.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Questions about features, sub-accounts or pricing? Our team replies within 1 business hour.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, label: "Email", value: "help@ghlcrm.store" },
              { icon: MessageCircle, label: "WhatsApp", value: "+44 7828 702783" },
              { icon: MapPin, label: "HQ", value: "Remote-first • global team" },
            ].map((i) => (
              <div key={i.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-soft">
                  <i.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</div>
                  <div className="text-base font-medium">{i.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-2xl border border-border bg-gradient-card p-8 shadow-elegant"
        >
          {sent ? (
            <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
              <div className="font-display text-3xl font-bold text-gradient">Thanks!</div>
              <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within 1 business hour.</p>
            </div>
          ) : (
            <>
              <Field label="Full name"><input required className="input" placeholder="Jane Doe" /></Field>
              <Field label="Work email"><input required type="email" className="input" placeholder="jane@company.com" /></Field>
              <Field label="Company"><input className="input" placeholder="Acme Inc" /></Field>
              <Field label="How can we help?">
                <textarea rows={4} required className="input resize-none" placeholder="Tell us about your business..." />
              </Field>
              <button className="mt-2 w-full rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
                Send message
              </button>
            </>
          )}
        </form>
      </div>
      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          background: oklch(1 0 0 / 0.04);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: var(--foreground);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px oklch(0.78 0.18 165 / 0.2);
        }
        .input::placeholder { color: var(--muted-foreground); }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="mb-4 block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
