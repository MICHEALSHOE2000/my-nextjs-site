import type { Metadata } from 'next';
import SitelinkPage from '@/components/sections/sitelink-page';
import { createWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Puppy Questions & Answers | PuppyHub USA',
  description: 'Questions to ask about puppy availability, pricing, health information and transport before making a decision.',
};

const questions = [
  ['How do I check if a puppy is still available?', 'Contact the team with the puppy’s name or the breed you want. Availability can change, so confirm the current status before making plans.'],
  ['What is included in the price?', 'Ask for a written breakdown of the puppy price, any transport costs, and any other charges before sending payment.'],
  ['Can I request health information?', 'Yes. Ask for the available veterinary records, vaccinations and any breeder information for the specific puppy you are considering.'],
  ['Can a puppy come to my state?', 'Share your state and ZIP code so the team can check the available transport options and timing for that puppy.'],
];

export default function FaqPage() {
  return (
    <SitelinkPage eyebrow="Questions & answers" title="Answers to ask for before choosing" introduction="Puppy details and transport arrangements vary. Use these questions to get the information you need about a specific puppy.">
      <div className="space-y-4">
        {questions.map(([question, answer]) => (
          <section key={question} className="rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-900">{question}</h2>
            <p className="mt-2 leading-7 text-slate-600">{answer}</p>
          </section>
        ))}
      </div>
      <a className="mt-8 inline-block rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800" href={createWhatsAppUrl('Hi PuppyHub USA, I have a question about a puppy: ')} target="_blank" rel="noopener noreferrer">Ask another question</a>
    </SitelinkPage>
  );
}
