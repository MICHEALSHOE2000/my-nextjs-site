"use client";

import { Dog, MessageCircle } from "lucide-react";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

export const FloatingPhone = () => {
  const whatsappUrl = createWhatsAppUrl(whatsappMessages.floatingGeneral);
  const breedRequestUrl = createWhatsAppUrl(whatsappMessages.floatingBreedRequest);

  return (
    <div className="fixed right-4 top-4 z-50 flex flex-col items-end gap-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          flex items-center gap-2
          px-3 py-2 md:px-4 md:py-2.5
          bg-white/90 backdrop-blur-sm
          border border-border/60
          rounded-lg shadow-lg
          hover:bg-primary hover:text-primary-foreground
          hover:shadow-xl hover:-translate-y-0.5
          smooth-transition
          text-sm md:text-base
          font-medium
          text-foreground hover:text-primary-foreground
          group
        "
      >
        <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:animate-pulse" />
        <span className="hidden sm:inline font-semibold">Chat on WhatsApp</span>
        <span className="sm:hidden font-semibold">WhatsApp</span>
      </a>

      <a
        href={breedRequestUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tell us the exact dog type you want"
        className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 smooth-transition md:text-sm"
      >
        <Dog className="h-4 w-4" />
        Tell us the exact dog type you want
      </a>
    </div>
  );
};
