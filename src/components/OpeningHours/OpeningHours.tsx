"use client";

import { useSyncExternalStore } from "react";
import { barberShop } from "@/config/barberShop";
import { getOpenStatus } from "@/lib/openingHours";
import { TrackedLink } from "@/components/TrackedLink";

const subscribeNoop = () => () => {};
const getServerSnapshot = () => null;

let cachedStatus: ReturnType<typeof getOpenStatus> | null = null;

function getSnapshot() {
  const next = getOpenStatus(barberShop.openingHours);
  if (
    !cachedStatus ||
    cachedStatus.isOpen !== next.isOpen ||
    cachedStatus.statusText !== next.statusText ||
    cachedStatus.todayIndex !== next.todayIndex
  ) {
    cachedStatus = next;
  }
  return cachedStatus;
}

export function OpeningHours() {
  const status = useSyncExternalStore(subscribeNoop, getSnapshot, getServerSnapshot);

  return (
    <div className="bg-surface-raised border border-border-strong p-6 sm:p-10">
      <div className="flex justify-between items-center gap-4 flex-wrap mb-6">
        <h3 className="m-0 font-extrabold text-2xl">Horário de funcionamento</h3>
        {status && (
          <span className="flex items-center gap-2 font-mono text-xs tracking-[0.08em] text-muted-light">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: status.isOpen ? "oklch(0.72 0.17 150)" : "#77726b",
              }}
            />
            {status.statusText}
          </span>
        )}
      </div>
      <dl className="m-0">
        {barberShop.openingHours.map((h) => (
          <div
            key={h.day}
            className="flex justify-between items-center py-3.5 border-b border-border text-base"
          >
            <dt className="flex items-center gap-2.5 font-semibold">
              {h.day}
              {status?.todayIndex === h.dayIndex && (
                <span className="font-mono text-[10px] tracking-[0.14em] bg-accent text-accent-foreground px-1.5 py-0.5">
                  HOJE
                </span>
              )}
            </dt>
            <dd className="m-0 font-mono text-sm text-muted-light">
              {h.open && h.close ? `${h.open} – ${h.close}` : "Fechado"}
            </dd>
          </div>
        ))}
      </dl>
      <TrackedLink
        href={`tel:${barberShop.phoneE164}`}
        event="click_phone"
        className="block mt-6 font-mono text-sm text-muted"
      >
        Telefone: {barberShop.phone}
      </TrackedLink>
    </div>
  );
}
