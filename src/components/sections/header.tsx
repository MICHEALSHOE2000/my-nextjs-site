"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, MessageCircle } from 'lucide-react';

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
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white">
      <div className="bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white">
        <a href={bannerWhatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
          Chat with a Puppy Advisor on WhatsApp: +1 (606) 507-8887
  const whatsappUrl = createWhatsAppUrl(whatsappMessages.headerPrimary);

  return (
    <header className="sticky top-0 z-40 border-b border-emerald-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-2 text-center text-sm font-medium text-white">
        <a
          href={createWhatsAppUrl(whatsappMessages.headerBanner)}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          🐶 Speak with a Puppy Advisor now on WhatsApp: +1 (606) 507-8887
        </a>
      </div>

      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">
            P
          </span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white">P</span>
          <div className="leading-tight">
            <p className="text-lg font-bold text-gray-900">PuppyHub USA</p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Trusted Puppy Match</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-gray-700 lg:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="transition-colors hover:text-emerald-600">
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

      {isMenuOpen ? (
    return (
        <>
            <header className="bg-white sticky top-0 z-30 shadow-sm border-b border-gray-100">
                <div className="bg-gradient-to-r from-primary to-green-600 text-white text-center py-2.5 px-4 text-sm font-medium">
                    <a href="https://wa.me/16065078887" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-green-100 transition-colors">
                        💬 Chat on WhatsApp: +1 (606) 507-8887
                    </a>
                </div>

                <div className="border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-[75px]">
                            <div className="flex items-center space-x-8">
                                <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
                                    <PuppySpotLogo />
                                </Link>
                                <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
                                    <Link href="#" className="hover:text-primary transition-colors smooth-transition">Available puppies</Link>
                                    <Link href="#" className="hover:text-primary transition-colors smooth-transition">Our promise</Link>
                                    <Link href="#" className="hover:text-primary transition-colors smooth-transition">About us</Link>
                                    <Link href="#" className="hover:text-primary transition-colors smooth-transition">How it works</Link>
                                </nav>
                            </div>
                            
                            <div className="hidden lg:flex items-center space-x-6">
                                <form className="flex items-center">
                                    <div className="relative">
                                        <input 
                                            type="text" 
                                            placeholder="Search for Breeds" 
                                            className="border border-gray-300 rounded-l-lg py-2.5 px-4 pr-10 text-sm focus:ring-2 focus:ring-primary focus:border-primary w-52 transition-all smooth-transition" 
                                        />
                                        <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    </div>
                                    <button type="submit" aria-label="Search" className="bg-primary text-white px-4 py-2.5 border border-primary rounded-r-lg hover:bg-green-600 transition-colors smooth-transition">
                                        Search
                                    </button>
                                </form>
                                <a href="https://wa.me/16065078887" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors smooth-transition">
                                    <MessageCircle size={16} />
                                    Chat on WhatsApp
                                </a>
                            </div>

        <button
          onClick={() => setIsMenuOpen((v) => !v)}
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
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      ) : null}
      )}
    </header>
  );
}
