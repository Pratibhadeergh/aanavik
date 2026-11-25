"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mkjrklor", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-[var(--soil)]">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="w-full border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--leaf)]"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-[var(--soil)]">
          Your email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--leaf)]"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-[var(--soil)]">
          Your message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          className="w-full resize-y border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] outline-none transition focus:border-[var(--leaf)]"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-company">Leave this field empty</label>
        <input id="contact-company" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 items-center justify-center bg-[var(--soil)] px-7 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-[var(--leaf)] disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p role="status" className="text-sm leading-6 text-[var(--soil)]">
          Thank you for getting in touch. Your message has been received. If a response is appropriate, we’ll be in touch.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm leading-6 text-red-700">
          Something went wrong and your message wasn’t sent. Please try again.
        </p>
      )}
    </form>
  );
}
