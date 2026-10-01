import type { DayHours } from "@/types/business";

function toMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function getOpenStatus(openingHours: DayHours[], now: Date = new Date()) {
  const todayIndex = now.getDay();
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const today = openingHours.find((h) => h.dayIndex === todayIndex);

  const isOpen = Boolean(
    today?.open &&
      today?.close &&
      minutesNow >= toMinutes(today.open) &&
      minutesNow < toMinutes(today.close),
  );

  return {
    todayIndex,
    isOpen,
    statusText: isOpen ? `Aberto agora · até ${today?.close}` : "Fechado agora",
  };
}
