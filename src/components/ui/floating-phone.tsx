"use client";

import { MessageCircle } from "lucide-react";

export const FloatingPhone = () => {
  const whatsappNumber = "16065078887";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed top-4 right-4 z-50
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
      <span className="hidden sm:inline font-semibold">
        Chat on WhatsApp
      </span>
      <span className="sm:hidden font-semibold">
        WhatsApp
      </span>
    </a>
  );
};
