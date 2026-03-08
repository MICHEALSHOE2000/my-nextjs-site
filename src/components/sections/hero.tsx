import { CheckCircle2, MessageCircle, ShieldCheck, Truck, Star } from "lucide-react";
import React from 'react';
import Image from 'next/image';
import { Star, MessageCircle, ShieldCheck, Truck, BadgeCheck } from 'lucide-react';
import { cn } from "@/lib/utils";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";

const stats = [
  { label: "Happy families", value: "220k+" },
  { label: "Breeders screened", value: "1,000+" },
  { label: "Avg support response", value: "<5 min" },
];

const HeroSection = () => {
  const whatsappUrl = createWhatsAppUrl(whatsappMessages.heroPrimary);

  return (
    <section className="bg-gradient-to-b from-emerald-50 via-white to-white pb-14 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-700">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              Trusted puppy placement platform
            </div>

            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Find the Right Puppy Faster, with Real Humans Helping You 1-on-1
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-600">
              Browse verified puppies, compare options by lifestyle, and get personal guidance on WhatsApp from first question to safe home delivery.
            <h1 className="text-[36px] leading-tight font-bold text-foreground font-display mt-4 mb-4">
              Bring Home the Right Puppy With Expert Help, Fast
            </h1>
            <p className="max-w-3xl text-[16px] text-muted-foreground leading-relaxed font-body">
              See verified puppies available now, get 1-on-1 guidance on WhatsApp, and choose secure nationwide delivery with our 10-year health commitment.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow transition hover:bg-emerald-700"
              >
                <MessageCircle className="h-4 w-4" />
                Get matched on WhatsApp
              </a>
              <a
                href="#available-puppies"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Browse available puppies
                See Available Puppies
              </a>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-emerald-100 bg-white p-3 text-sm font-medium text-slate-700"><ShieldCheck className="mr-2 inline h-4 w-4 text-emerald-600" />10-year health commitment</div>
              <div className="rounded-xl border border-emerald-100 bg-white p-3 text-sm font-medium text-slate-700"><Truck className="mr-2 inline h-4 w-4 text-emerald-600" />Safe nationwide delivery</div>
              <div className="rounded-xl border border-emerald-100 bg-white p-3 text-sm font-medium text-slate-700"><CheckCircle2 className="mr-2 inline h-4 w-4 text-emerald-600" />Vetted breeder network</div>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-lg">
            <h3 className="text-lg font-bold text-slate-900">Why families choose us</h3>
            <p className="mt-1 text-sm text-slate-600">A premium, guided buying experience similar to top national puppy marketplaces.</p>
            <div className="mt-5 space-y-3">
              {stats.map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg bg-emerald-50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                  <span className="text-lg font-extrabold text-emerald-700">{item.value}</span>
                </div>
              ))}
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <MessageCircle className="h-4 w-4" />
              Start your puppy consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
