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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/30 to-background">
      <FloatingPhone />
      <Header />
      <main>
        <HeroSection />
        <section className="container mx-auto px-4">
          <div className="mb-4 rounded-xl border border-green-100 bg-white p-4 text-center text-sm font-medium text-foreground shadow-sm">
            <span className="text-primary">Limited availability:</span> Popular breeds are reserved quickly — chat on WhatsApp for real-time help choosing the right puppy.
          </div>
        </section>
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <FilterSidebar />
            <div className="flex-1 min-w-0" id="available-puppies">
              <PuppyGrid />
            </div>
          </div>
        </div>
        <div className="space-y-16 lg:space-y-24">
          <AboutText />
          <Testimonials />
          <LifestyleCategories />
          <ExpertQuote />
          <LocationsMap />
        </div>
      </main>
      <Footer />
    </div>
  );
}
