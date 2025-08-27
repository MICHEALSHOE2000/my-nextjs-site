import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
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
            <h1 className="text-[36px] leading-tight font-bold text-foreground font-display mb-6">
              Available Puppies
            </h1>
            <p className="mt-4 max-w-3xl text-[16px] text-muted-foreground leading-relaxed font-body">
              Welcome to PuppySpot! Take a moment to browse our incredible selection of adorable, ready for love puppies. We only work with the country's top breeders, offer three handle with care delivery options and a 10-year health commitment. So wherever you live we can deliver your perfect puppy! Complimentary consultations with one of our Puppy Concierges are available when you're ready.
            </p>
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