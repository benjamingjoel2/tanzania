"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { Button, ButtonLink, buttonClasses } from "@/components/ui/Button";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { DoorMotif } from "@/components/ui/DoorMotif";
import { cn } from "@/lib/utils";

export function Confirmation({
  reference,
  name,
  onDone,
  variant,
}: {
  reference: string;
  name?: string;
  onDone?: () => void;
  variant: "page" | "modal";
}) {
  const firstName = name?.trim().split(/\s+/)[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("text-center", variant === "page" && "rounded-3xl bg-snow p-8 ring-1 ring-line sm:p-14")}
      role="status"
    >
      <CheckCircle2 aria-hidden className="mx-auto size-12 text-acacia" strokeWidth={1.5} />
      <h2 className="mt-6 text-4xl md:text-5xl">Asante{firstName ? `, ${firstName}` : ""}.</h2>
      <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-stone">
        Your journey request is with us. Your dedicated specialist will be in touch within one working day with first
        ideas, honest advice and a few questions to shape your trip.
      </p>
      {reference && (
        <p className="mt-6 text-sm text-stone">
          Your reference: <span className="font-mono font-semibold text-charcoal">{reference}</span>
        </p>
      )}
      <DoorMotif className="mx-auto my-10 max-w-56" />
      <ol className="mx-auto grid max-w-2xl gap-6 text-left sm:grid-cols-3">
        {[
          ["We listen", "Your specialist reads every detail and may call or message with a few questions."],
          ["We draft", "You receive a first itinerary with camps, routes and transparent pricing."],
          ["We refine", "Together we tweak it until it feels exactly right. No obligation."],
        ].map(([t, b], i) => (
          <li key={t}>
            <p className="font-display text-2xl text-savanna-ink">0{i + 1}</p>
            <p className="mt-1 font-medium">{t}</p>
            <p className="mt-1 text-sm text-stone">{b}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href={whatsappLink(`Hello ${siteConfig.name}! I've just sent a journey request${reference ? ` (ref ${reference})` : ""}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses("dark", "md")}
        >
          <SocialIcon name="whatsapp" className="size-4" /> Say hello on WhatsApp
        </a>
        {variant === "modal" ? (
          <Button variant="outline" onClick={onDone}>
            Keep exploring
          </Button>
        ) : (
          <ButtonLink href="/safaris" variant="outline">
            Browse safaris
          </ButtonLink>
        )}
      </div>
    </motion.div>
  );
}
