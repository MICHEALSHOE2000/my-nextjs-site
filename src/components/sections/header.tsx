"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

const navItems = [
  { label: "Available puppies", href: "#available-puppies" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const primaryWhatsappUrl = createWhatsAppUrl(whatsappMessages.headerPrimary);
  const bannerWhatsappUrl = createWhatsAppUrl(whatsappMessages.headerBanner);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-2 text-center text-sm font-medium text-white">
        <a
          href={bannerWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          🐶 Speak with a Puppy Advisor now on WhatsApp: +1 (606) 507-8887
        </a>
      </div>

      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">
            P
          </span>

          <div className="leading-tight">
            <p className="text-lg font-bold text-gray-900">PuppyHub USA</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Trusted Puppy Match
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-gray-700 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-emerald-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={primaryWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 lg:inline-flex"
        >
          <MessageCircle size={16} />
          Chat on WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="rounded-lg p-2 hover:bg-emerald-50 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-emerald-100 bg-white px-4 py-4 lg:hidden">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-emerald-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={primaryWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
