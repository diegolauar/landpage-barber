import Image from "next/image";
import { barberShop } from "@/config/barberShop";
import { PlaceholderTile } from "@/components/PlaceholderTile";

export function About() {
  return (
    <section
      id="sobre"
      className="max-w-7xl mx-auto px-5 sm:px-10 py-20 sm:py-35"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-24 items-center">
        <div>
          <p className="mb-5 font-mono text-xs tracking-[0.3em] text-accent">
            01 — SOBRE
          </p>
          <h2 className="font-extrabold leading-[0.98] tracking-[-0.02em] text-[38px] sm:text-[clamp(38px,4.8vw,68px)] text-balance">
            Mais do que um corte. Uma experiência.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-light text-pretty">
            A {barberShop.name} nasceu com o propósito de transformar o
            tradicional cuidado masculino em uma experiência completa. Nosso
            espaço em {barberShop.address.neighborhood} combina estilo,
            técnica e atendimento personalizado para que cada cliente saia
            daqui se sentindo ainda melhor.
          </p>
          <p className="mt-4.5 text-lg leading-relaxed text-muted-light">
            Aqui, cada detalhe importa: do atendimento ao acabamento final.
          </p>
          <a
            href="#galeria"
            className="inline-flex items-center gap-3.5 mt-10 font-bold text-sm tracking-[0.08em] uppercase border-b-2 border-accent pb-2"
          >
            Conheça nossa barbearia <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="grid grid-cols-[1.25fr_1fr] grid-rows-2 gap-3 h-[480px]">
          <div className="row-span-2 relative overflow-hidden">
            <Image
              src="/images/gallery/corte-barba.jpg"
              alt={`Barbeiro modelando a barba de um cliente na ${barberShop.name}`}
              fill
              sizes="(min-width: 1024px) 30vw, 60vw"
              className="object-cover object-[8%_50%]"
            />
            <div className="absolute left-3.5 bottom-3.5 w-10 h-10 border-l-2 border-b-2 border-accent" />
          </div>
          <PlaceholderTile label="foto — fachada" />
          <PlaceholderTile label="foto — recepção / cadeiras" />
        </div>
      </div>
    </section>
  );
}
