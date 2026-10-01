import { testimonials } from "@/config/barberShop";

export function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-35">
      <p className="mb-5 font-mono text-xs tracking-[0.3em] text-accent">
        06 — DEPOIMENTOS
      </p>
      <h2 className="mb-14 font-extrabold leading-[0.98] tracking-[-0.02em] text-[38px] sm:text-[clamp(38px,4.8vw,68px)]">
        Quem senta na cadeira, volta.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="m-0 bg-surface-raised border border-border px-7.5 pt-8.5 pb-7.5 flex flex-col gap-6"
          >
            <span aria-hidden="true" className="font-black text-6xl leading-[0.6] text-accent h-7.5">
              &ldquo;
            </span>
            <blockquote className="m-0 text-lg leading-relaxed font-medium flex-1 text-pretty">
              {testimonial.quote}
            </blockquote>
            <figcaption className="font-mono text-[13px] tracking-[0.1em] text-muted">
              — {testimonial.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
