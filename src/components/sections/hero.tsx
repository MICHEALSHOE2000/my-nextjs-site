import React from 'react';
import Image from 'next/image';
import { Star, MessageCircle, ShieldCheck, Truck, BadgeCheck } from 'lucide-react';
import { cn } from "@/lib/utils";

const StarRating = ({ rating = 5, className }: { rating?: number; className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center gap-1", className)}>
      {Array.from({ length: rating }, (_, i) => (
        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
      ))}
    </div>
  );
};

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/16065078887";

  return (
    <div className="bg-gradient-to-b from-green-50/50 to-background pt-12 pb-16">
      <div className="container mx-auto px-5">
        <div className="text-sm text-muted-foreground mb-8 font-body">
          <a href="https://www.puppyspot.com/" className="hover:text-primary transition-colors hover:underline">PuppySpot</a>
          <span className="mx-2 text-gray-300">/</span>
          <span className="font-medium">Puppies for Sale</span>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="flex-1 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-900">
              <BadgeCheck className="h-4 w-4 text-green-700" />
              Healthy puppies from trusted breeders
            </div>
            <h1 className="text-[36px] leading-tight font-bold text-foreground font-display mt-4 mb-4">
              Bring Home the Right Puppy With Expert Help, Fast
            </h1>
            <p className="max-w-3xl text-[16px] text-muted-foreground leading-relaxed font-body">
              See verified puppies available now, get 1-on-1 guidance on WhatsApp, and choose secure nationwide delivery with our 10-year health commitment.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-primary-foreground font-semibold shadow-sm hover:bg-primary/90 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href="#available-puppies"
                className="inline-flex items-center justify-center rounded-md border border-border bg-white px-5 py-3 text-foreground font-semibold hover:bg-muted transition-colors"
              >
                See Available Puppies
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
              <div className="flex items-center gap-2 rounded-md border border-green-100 bg-white px-3 py-2 text-sm text-foreground">
                <ShieldCheck className="h-4 w-4 text-primary" />
                10-year health commitment
              </div>
              <div className="flex items-center gap-2 rounded-md border border-green-100 bg-white px-3 py-2 text-sm text-foreground">
                <Truck className="h-4 w-4 text-primary" />
                Nationwide delivery
              </div>
              <div className="flex items-center gap-2 rounded-md border border-green-100 bg-white px-3 py-2 text-sm text-foreground">
                <MessageCircle className="h-4 w-4 text-primary" />
                Fast WhatsApp support
              </div>
            </div>
          </div>

          <div className="w-full lg:max-w-[380px] lg:flex-shrink-0 lg:mt-2 animate-slide-up">
            <a href="https://www.puppyspot.com/reviews" className="block bg-gradient-to-br from-[#f8fdfc] to-[#f0f9f8] border border-green-100 rounded-xl p-6 w-full text-center hover:shadow-lg hover:scale-[1.02] transition-all duration-300 smooth-transition hover-lift">
              <h3 className="font-semibold text-lg text-foreground font-display mb-2">
                The easiest &amp; safest way to get a new puppy
              </h3>
              <StarRating className="my-4" />
              <p className="font-semibold text-sm text-foreground mb-4 font-display">
                Trusted Breeders:
              </p>
              <div className="flex items-start justify-center gap-10">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-green-100">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/svgs/puppy-spot-nose-4.svg?"
                      alt="PuppySpot Certified"
                      width={28}
                      height={26}
                    />
                  </div>
                  <span className="text-xs font-medium text-foreground font-display">Certified</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-white p-3 rounded-full shadow-sm border border-green-100">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/icons/logo-usda-1.png?"
                      alt="USDA Licensed"
                      width={28}
                      height={26}
                    />
                  </div>
                  <span className="text-xs font-medium text-foreground font-display">Licensed</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
