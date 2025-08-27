"use client";

import { Phone } from "lucide-react";

export const FloatingPhone = () => {
  return (
    <a
      href="sms:13022503912"
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
      <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:animate-pulse" />
      <span className="hidden sm:inline font-semibold">
        (302) 250-3912
      </span>
      <span className="sm:hidden font-semibold">
        Text Us
      </span>
    </a>
  );
};