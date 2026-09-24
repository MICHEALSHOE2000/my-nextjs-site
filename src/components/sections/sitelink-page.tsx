import type { ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { FloatingPhone } from '@/components/ui/floating-phone';

export default function SitelinkPage({
  eyebrow,
  title,
  introduction,
  children,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <FloatingPhone />
      <Header />
      <main>
        <div className="bg-gradient-to-b from-emerald-50 to-white py-14 md:py-20">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">{eyebrow}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{introduction}</p>
          </div>
        </div>
        <div className="container mx-auto max-w-5xl px-4 pb-20">{children}</div>
        <nav aria-label="Explore PuppyHub" className="border-t border-slate-200 bg-slate-50 py-10">
          <div className="container mx-auto flex max-w-5xl flex-wrap gap-3 px-4 text-sm font-semibold text-emerald-800">
            <Link className="rounded-lg bg-white px-4 py-3 hover:bg-emerald-50" href="/find-a-puppy">Find a puppy</Link>
            <Link className="rounded-lg bg-white px-4 py-3 hover:bg-emerald-50" href="/how-it-works">How it works</Link>
            <Link className="rounded-lg bg-white px-4 py-3 hover:bg-emerald-50" href="/faq">Questions & answers</Link>
            <Link className="rounded-lg bg-white px-4 py-3 hover:bg-emerald-50" href="/contact">Contact us</Link>
          </div>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
