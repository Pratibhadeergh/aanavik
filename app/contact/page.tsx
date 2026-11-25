import ContactForm from "@/app/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-14 lg:py-28">
      <header className="max-w-4xl">
        <h1 className="font-serif text-5xl leading-[1.08] tracking-tight text-[var(--soil)] sm:text-6xl lg:text-7xl">
          Write to Aanavik
        </h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-[var(--muted)] sm:text-2xl">
          Have a question, an idea, a perspective to share, or something you
          would like to explore together? I’d be glad to hear from you.
        </p>
      </header>

      <section className="mt-16 max-w-3xl border-t border-[var(--line)] pt-10">
        <ContactForm />
      </section>
    </main>
  );
}
