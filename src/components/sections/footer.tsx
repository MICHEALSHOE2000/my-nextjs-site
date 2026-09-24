import Link from 'next/link';
import { createWhatsAppUrl, PHONE, PHONE_DISPLAY, whatsappMessages } from '@/lib/whatsapp';

const links = [
  { href: '/find-a-puppy', label: 'Find a puppy' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/faq', label: 'Questions & answers' },
  { href: '/contact', label: 'Contact us' },
];

export default function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-slate-50 text-slate-700">
      <div className="container mx-auto grid gap-9 px-4 py-12 md:grid-cols-3">
        <div>
          <Link href="/" className="text-xl font-extrabold text-slate-900">PuppyHub USA</Link>
          <p className="mt-3 max-w-sm text-sm leading-6">Ask about puppies, review the details and choose your next steps with the team.</p>
        </div>
        <nav aria-label="Footer navigation">
          <h2 className="font-bold text-slate-900">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map(({ href, label }) => <li key={href}><Link className="hover:text-emerald-700 hover:underline" href={href}>{label}</Link></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="font-bold text-slate-900">Need help?</h2>
          <a className="mt-3 inline-block text-sm font-semibold text-emerald-800 hover:underline" href={createWhatsAppUrl(whatsappMessages.footerSupport)} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          {PHONE && <p className="mt-2 text-sm"><a href={`tel:${PHONE.replace(/[^\d+]/g, '')}`} className="hover:underline">{PHONE_DISPLAY}</a></p>}
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs">© {new Date().getFullYear()} PuppyHub USA</div>
    </footer>
  );
}
