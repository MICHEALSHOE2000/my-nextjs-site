import type { Metadata } from 'next';
import SitelinkPage from '@/components/sections/sitelink-page';
import { createWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Find a Puppy | PuppyHub USA',
  description: 'Tell PuppyHub USA what breed, size, budget and timing you have in mind. Ask about current puppy options before making a decision.',
};

export default function FindAPuppyPage() {
  return (
    <SitelinkPage eyebrow="Your puppy search" title="Find a puppy that fits your life" introduction="Tell us what you are looking for and ask which puppies are currently available. Details, prices and timing should be confirmed directly before you make a decision.">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-7">
          <h2 className="text-xl font-bold text-slate-900">What to include in your message</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
            <li>Preferred breed or the size and temperament you want</li>
            <li>Your budget and when you hope to bring a puppy home</li>
            <li>Your state and any questions about the puppy</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-emerald-900 p-7 text-white">
          <h2 className="text-xl font-bold">Start a conversation</h2>
          <p className="mt-3 leading-7 text-emerald-50">Ask for up-to-date photos, age, location, price, health records and delivery details for any puppy you are considering.</p>
          <a className="mt-6 inline-block rounded-lg bg-white px-5 py-3 font-semibold text-emerald-900 hover:bg-emerald-50" href={createWhatsAppUrl('Hi PuppyHub USA, I am looking for a puppy. My preferred breed or size is: ___. My budget is: ___. I live in: ___. What options are currently available?')} target="_blank" rel="noopener noreferrer">Ask about puppies</a>
        </div>
      </div>
    </SitelinkPage>
  );
}
