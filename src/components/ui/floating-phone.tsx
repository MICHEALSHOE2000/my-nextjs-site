"use client";

import { Dog, MessageCircle } from "lucide-react";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export const FloatingPhone = () => {
  const whatsappUrl = createWhatsAppUrl(whatsappMessages.floatingGeneral);
  const breedRequestUrl = createWhatsAppUrl(whatsappMessages.floatingBreedRequest);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex max-w-[280px] flex-col items-end gap-2">
      <a
        href={breedRequestUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tell us the exact dog type you want"
        className="inline-flex items-center gap-2 rounded-xl border border-emerald-300 bg-white px-3 py-2 text-xs font-semibold text-emerald-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50 md:text-sm"
      >
        <Dog className="h-4 w-4" />
        Tell us exactly what dog you want
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-700"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Puppy Advisor
      </a>
    </div>
  );
};
