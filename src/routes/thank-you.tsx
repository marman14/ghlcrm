import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, MessageCircle, Mail } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank you — GHLCRM" },
      { name: "description", content: "Your purchase is confirmed. Finish setting up your GoHighLevel account." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-card p-8 shadow-elegant md:p-12">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
              Purchase received
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold md:text-5xl">
            Thank you for your purchase — your <span className="text-gradient">GHLCRM setup</span> is next
          </h1>

          <p className="mt-5 text-base text-white/80">
            You're just one step away from activating your GHLCRM (GoHighLevel) account.
          </p>

          <p className="mt-4 text-sm text-white/70">
            The reason this deal is so affordable is simple: we already have a full GoHighLevel agency account.
            We're reselling some of our extra sub-accounts at wholesale to people who can't justify $97/month yet,
            so you can test, learn and experience the real power of GHL without the standard price.
          </p>

          <div className="mt-8 rounded-2xl border border-primary/30 bg-background/40 p-6">
            <h2 className="text-xl font-semibold">Start setting up your GoHighLevel account</h2>
            <p className="mt-2 text-sm text-white/75">
              Click the button below to access the official GoHighLevel setup page. You'll be asked for your
              business name and email address, then to add your card details directly with GoHighLevel.
            </p>
            <p className="mt-3 text-sm text-white/75">
              Don't worry — GoHighLevel will only charge <strong>$1 to verify your card</strong>. After that,
              any costs are usage-based only (SMS, phone, and email credits) and are billed through their
              wallet system based on what you actually use. <strong>No extra subscription fees, no surprise monthly charges.</strong>
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://guaranteedcrm.io/crm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Go to GoHighLevel Setup Page <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/447828702783"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-card/80"
              >
                <MessageCircle className="h-4 w-4" /> Connect on WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-8 space-y-2 text-sm text-white/75">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              If you have any issues with the setup link or questions about the $1 verification, email us at{" "}
              <a href="mailto:help@ghlcrm.store" className="text-primary underline-offset-4 hover:underline">
                help@ghlcrm.store
              </a>
              .
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              For faster support, message us on WhatsApp at{" "}
              <a href="https://wa.me/447828702783" className="text-primary underline-offset-4 hover:underline">
                +44 7828 702783
              </a>
              .
            </p>
          </div>

          <p className="mt-8 text-center text-xs text-white/50">
            Start setting up your GHLCRM account in just a few minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
