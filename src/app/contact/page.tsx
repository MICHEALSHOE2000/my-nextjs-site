import type { Metadata } from 'next';
import SitelinkPage from '@/components/sections/sitelink-page';
import { createWhatsAppUrl, PHONE, PHONE_DISPLAY } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact PuppyHub USA',
  description: 'Contact PuppyHub USA to ask about puppy availability, pricing or next steps.',
};

export default function ContactPage() {
  return (
    <SitelinkPage eyebrow="Get in touch" title="Contact PuppyHub USA" introduction="Have a question about a puppy or the buying process? Send a message with the breed or listing you are interested in and your state.">
      <div className="max-w-2xl rounded-2xl border border-emerald-200 bg-emerald-50 p-7">
        <h2 className="text-xl font-bold text-slate-900">Message our team</h2>
        <p className="mt-3 leading-7 text-slate-700">Ask about current availability, price, records and possible delivery to your location. We will share the details available for the specific puppy.</p>
        {PHONE && <p className="mt-4 font-semibold text-slate-900">Phone: <a className="underline" href={`tel:${PHONE.replace(/[^\d+]/g, '')}`}>{PHONE_DISPLAY}</a></p>}
        <a className="mt-6 inline-block rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800" href={createWhatsAppUrl('Hi PuppyHub USA, I have a question about your puppies.')} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
      </div>
    </SitelinkPage>
  );
}
