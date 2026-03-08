import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import FilterSidebar from '@/components/sections/filter-sidebar';
import PuppyGrid from '@/components/sections/puppy-grid';
import AboutText from '@/components/sections/about-text';
import Testimonials from '@/components/sections/testimonials';
import LifestyleCategories from '@/components/sections/lifestyle-categories';
import ExpertQuote from '@/components/sections/expert-quote';
import LocationsMap from '@/components/sections/locations-map';
import Footer from '@/components/sections/footer';
import { FloatingPhone } from '@/components/ui/floating-phone';
import { createWhatsAppUrl, whatsappMessages } from '@/lib/whatsapp';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <FloatingPhone />
      <Header />
      <main>
        <HeroSection />

        <section className="container mx-auto px-4">
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-center text-sm font-medium text-amber-900 shadow-sm">
            <span className="font-bold">High-demand breeds sell out fast:</span>{' '}
            <a
              href={createWhatsAppUrl(whatsappMessages.heroPrimary)}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              chat now to reserve your ideal puppy
            </a>
            .
          </div>
        </section>

        <section id="available-puppies" className="container mx-auto px-4 pb-14 pt-4">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700">Live listings</p>
              <h2 className="text-2xl font-extrabold text-slate-900">Available Puppies</h2>
            </div>
            <a
              href={createWhatsAppUrl(whatsappMessages.floatingBreedRequest)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 md:inline-block"
            >
              Tell us what dog you want
            </a>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <FilterSidebar />
            <div className="min-w-0 flex-1">
              <PuppyGrid />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-emerald-900 py-12 text-white">
          <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
            {[
              ['1', 'Tell us what you want', 'Share breed, size, budget, and timing via WhatsApp.'],
              ['2', 'Get handpicked options', 'We send matching puppies with transparent details and support.'],
              ['3', 'Reserve and receive safely', 'Choose confidently and get secure nationwide delivery.'],
            ].map(([step, title, text]) => (
              <div key={step} className="rounded-2xl border border-white/20 bg-white/10 p-5">
                <p className="text-xs font-bold tracking-[0.2em] text-emerald-200">STEP {step}</p>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-emerald-50/90">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-16 lg:space-y-24">
          <AboutText />
          <section id="reviews">
            <Testimonials />
          </section>
          <LifestyleCategories />
          <ExpertQuote />
          <LocationsMap />
        </div>
      </main>
      <Footer />
    </div>
  );
}
