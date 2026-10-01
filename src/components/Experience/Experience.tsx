const experienceItems = [
  {
    title: "Ambiente",
    text: "Espaço moderno, confortável e pensado para você.",
  },
  {
    title: "Profissionais",
    text: "Barbeiros preparados para diferentes estilos e técnicas.",
  },
  {
    title: "Atendimento",
    text: "Atendimento personalizado do início ao fim.",
  },
  {
    title: "Qualidade",
    text: "Produtos e ferramentas selecionados para entregar um excelente acabamento.",
  },
  {
    title: "Estilo",
    text: "Seu corte deve combinar com sua personalidade.",
  },
];

export function Experience() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-35">
      <p className="mb-5 font-mono text-xs tracking-[0.3em] text-accent">
        03 — EXPERIÊNCIA STROM
      </p>
      <h2 className="mb-14 font-extrabold leading-[0.98] tracking-[-0.02em] text-[38px] sm:text-[clamp(38px,4.8vw,68px)] max-w-[16ch] text-balance">
        Aqui, cada detalhe faz parte da experiência.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 gap-x-7">
        {experienceItems.map((item, i) => (
          <div
            key={item.title}
            className="border-t-2 border-foreground pt-5.5 flex flex-col gap-3"
          >
            <span className="font-mono text-xs text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-extrabold text-[22px]">{item.title}</h3>
            <p className="text-[15px] leading-relaxed text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
