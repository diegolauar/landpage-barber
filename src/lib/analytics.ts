export type AnalyticsEvent =
  | "click_whatsapp"
  | "click_phone"
  | "click_maps"
  | "click_instagram"
  | "click_schedule"
  | "click_service"
  | "submit_contact_form";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track(event: AnalyticsEvent, data?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}
