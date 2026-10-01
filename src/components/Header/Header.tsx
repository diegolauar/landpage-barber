"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navItems, barberShop } from "@/config/barberShop";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import { TrackedLink } from "@/components/TrackedLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waLink = generateWhatsAppLink();
  const showSolidBg = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-colors duration-300 border-b ${
        showSolidBg ? "bg-background/95 border-border" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-5 py-3.5 sm:px-10">
        <a
          href="#inicio"
          aria-label={`${barberShop.name} — início`}
          className="flex items-center gap-3"
        >
          <Image
            src="/images/barbershop/strom-logo.png"
            alt={`Logo ${barberShop.name}`}
            width={44}
            height={44}
            className="block"
          />
          <span className="flex flex-col leading-none">
            <span className="font-extrabold text-[19px] tracking-[0.08em]">STROM</span>
            <span className="font-mono text-[9px] tracking-[0.38em] text-muted mt-1">
              BARBEARIA
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:flex gap-7.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-light hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <TrackedLink
            href={waLink}
            target="_blank"
            rel="noopener"
            event="click_whatsapp"
            eventData={{ source: "header" }}
            className="bg-accent text-accent-foreground font-bold text-[13px] tracking-[0.06em] uppercase px-4.5 py-3 whitespace-nowrap hover:bg-foreground transition-colors"
          >
            Agendar horário
          </TrackedLink>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="lg:hidden w-11 h-11 border border-border-strong text-foreground text-lg font-mono"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Menu mobile"
          className="lg:hidden border-t border-border bg-background px-5 pt-3 pb-7 flex flex-col"
        >
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold py-3.5 border-b border-border flex justify-between"
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
