import { useEffect, useState } from "react";
import { Copy, X, MessageCircle } from "lucide-react";

const STORAGE_KEY = "exitIntentShown";

export function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem(STORAGE_KEY)) {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setOpen(true);
      }
    };

    // Mobile fallback: trigger after fast scroll-up near top, or on back navigation
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (lastY - y > 60 && y < 200 && !sessionStorage.getItem(STORAGE_KEY)) {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setOpen(true);
      }
      lastY = y;
    };

    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!open) return null;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText("LTD20");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-primary/40 bg-gradient-card p-8 shadow-elegant">
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-full p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="text-center">
          <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Before you go — 20% off Yearly plan
          </span>
          <h3 className="mt-4 text-3xl font-bold">
            Get the <span className="text-gradient">Yearly plan</span> for just $79
          </h3>
          <p className="mt-3 text-sm text-white/75">
            Copy this code and use it at checkout to lock in Yearly GoHighLevel access before the wholesale slots are gone.
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
            href="https://buy.stripe.com/dRmcN6f0F6jd5Nu3h59R60u"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block w-full rounded-xl bg-gradient-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Get Yearly Plan – $79
          </a>

          <a
            href="https://wa.me/447828702783"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold hover:bg-card/80"
          >
            <MessageCircle className="h-4 w-4" /> Talk on WhatsApp
          </a>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 block w-full text-sm text-white/60 underline-offset-4 hover:text-white hover:underline"
          >
            PS: No thanks, I'll pay full price.
          </button>
        </div>
      </div>
    </div>
  );
}
