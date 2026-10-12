"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FieldError, FieldLabel, inputClass } from "@/components/planner/fields";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().trim().min(2, "Please add a subject").max(120),
  message: z.string().trim().min(10, "Please tell us a little more").max(3000),
});
type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema), mode: "onTouched" });

  async function onSubmit(values: ContactValues) {
    setError("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).catch(() => null);
    if (res?.ok) setSent(true);
    else setError("We couldn't send your message. Please try again or email us directly.");
  }

  if (sent) {
    return (
      <div role="status" className="rounded-none bg-acacia p-10 text-white">
        <CheckCircle2 aria-hidden className="size-9 text-savanna-light" />
        <p className="mt-5 font-display text-3xl">Asante. Message received.</p>
        <p className="mt-3 text-white/80">A specialist will reply within one working day.</p>
      </div>
    );
  }

  const field = (name: keyof ContactValues) => ({
    id: `contact-${name}`,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    className: inputClass,
    ...register(name),
  });

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-6 border border-line bg-white p-7 md:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <input autoComplete="name" {...field("name")} />
          <FieldError id="contact-name-error" message={errors.name?.message} />
        </div>
        <div>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <input type="email" autoComplete="email" {...field("email")} />
          <FieldError id="contact-email-error" message={errors.email?.message} />
        </div>
      </div>
      <div>
        <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
        <input {...field("subject")} />
        <FieldError id="contact-subject-error" message={errors.subject?.message} />
      </div>
      <div>
        <FieldLabel htmlFor="contact-message">Message</FieldLabel>
        <textarea rows={6} {...field("message")} />
        <FieldError id="contact-message-error" message={errors.message?.message} />
      </div>
      {error && (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      )}
      <div>
        <Button type="submit" variant="dark" size="lg" arrow disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
