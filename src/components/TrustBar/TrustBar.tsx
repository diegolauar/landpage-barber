const trustItems = [
  { big: "+5 anos", small: "De experiência" },
  { big: "+3.000", small: "Clientes atendidos" },
  { big: "Atendimento", small: "Personalizado" },
  { big: "Ambiente", small: "Moderno e confortável" },
];

export function TrustBar() {
  return (
    <section aria-label="Diferenciais" className="border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <div
            key={item.small}
            className="px-5 sm:px-9 py-7.5 border-b border-border nth-last-[-n+2]:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 flex flex-col gap-1.5"
          >
            <span className="font-extrabold text-[26px] sm:text-4xl tracking-[-0.01em]">
              {item.big}
            </span>
            <span className="font-mono text-xs tracking-[0.14em] uppercase text-muted">
              {item.small}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
