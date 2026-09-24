import type { Metadata } from 'next';
import SitelinkPage from '@/components/sections/sitelink-page';
import { createWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'How It Works | PuppyHub USA',
  description: 'Learn how to ask about puppies, check the details, and confirm the next steps with PuppyHub USA.',
};

const steps = [
  ['1', 'Share your preferences', 'Tell us your preferred breed, budget, location and timing so we can discuss suitable options.'],
  ['2', 'Check the puppy details', 'Request current photos or video, age, price, health records and the puppy’s location. Ask any questions before committing.'],
  ['3', 'Agree on the next steps', 'Confirm availability, total costs, transport arrangements and any applicable terms directly with the team before sending payment.'],
];

export default function HowItWorksPage() {
  return (
    <SitelinkPage eyebrow="The process" title="How PuppyHub works" introduction="Start with a conversation, review the details of a specific puppy, and confirm the arrangements that work for you.">
      <div className="grid gap-5 md:grid-cols-3">
        {steps.map(([number, title, description]) => (
          <section className="rounded-2xl border border-slate-200 p-6" key={number}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800">{number}</span>
            <h2 className="mt-5 text-xl font-bold text-slate-900">{title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{description}</p>
          </section>
        ))}
      </div>
      <a className="mt-8 inline-block rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800" href={createWhatsAppUrl('Hi PuppyHub USA, I would like to understand the process and see current puppy options.')} target="_blank" rel="noopener noreferrer">Ask us about the process</a>
    </SitelinkPage>
  );
}
