"use client";

import { useState } from "react";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DoorMotif } from "@/components/ui/DoorMotif";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function GuideSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [leaving, setLeaving] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "tanzania-safari-guide" }),
      });
      if (!res.ok) throw new Error();
      // Fade the form out, then show the confirmation (instant when motion is reduced).
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setStatus("success");
      else {
        setLeaving(true);
        window.setTimeout(() => setStatus("success"), 300);
      }
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again in a moment.");
    }
  }

  return (
    <section className="section-y bg-sand/60" aria-labelledby="guide-heading">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-none bg-snow px-6 py-14 ring-1 ring-line md:px-16 md:py-20">
          <DoorMotif className="absolute inset-x-0 top-0 opacity-70" />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="grid size-14 place-items-center rounded-full bg-savanna/20 text-savanna-ink">
                <BookOpen aria-hidden className="size-6" />
              </span>
              <p className="eyebrow mt-6 text-savanna-ink">Free download</p>
              <h2 id="guide-heading" className="mt-3 text-h2">
                The Tanzania Safari Guide
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone">
                Where to go month by month, how to choose your camps, what it really costs, and the questions to ask
                before you book. Written by our specialists, free to your inbox.
              </p>
            </div>
            <div aria-live="polite">
                {status === "success" ? (
                  <div key="done" style={{ ["--rise" as string]: "12px" }} className="rise-in rounded-none bg-acacia p-8 text-white">
                    <CheckCircle2 aria-hidden className="size-8 text-savanna-light" />
                    <p className="mt-4 font-display text-3xl">Karibu, it&apos;s on its way.</p>
                    <p className="mt-3 text-white/80">
                      Check your inbox for The Tanzania Safari Guide. If it isn&apos;t there in a few minutes, look in
                      your promotions or spam folder.
                    </p>
                  </div>
                ) : (
                  <form
                    key="form"
                    onSubmit={onSubmit}
                    noValidate
                    className={`transition-[opacity,translate] duration-300 ${leaving ? "-translate-y-3 opacity-0" : ""}`}
                  >
                    <label htmlFor="guide-email" className="mb-2 block text-sm font-medium">
                      Email address
                    </label>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <input
                        id="guide-email"
                        type="email"
                        autoComplete="email"
                        placeholder="name@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? "guide-error" : "guide-note"}
                        className="min-w-0 flex-1 rounded-full border border-line bg-white px-6 py-4 text-base outline-none transition-colors focus:border-charcoal"
                      />
                      <Button type="submit" variant="dark" size="lg" arrow disabled={status === "loading"}>
                        {status === "loading" ? "Sending…" : "Send me the guide"}
                      </Button>
                    </div>
                    {error ? (
                      <p id="guide-error" className="mt-3 text-sm text-red-700">
                        {error}
                      </p>
                    ) : (
                      <p id="guide-note" className="mt-3 text-sm text-stone">
                        One useful email a month at most. Unsubscribe any time.
                      </p>
                    )}
                  </form>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
