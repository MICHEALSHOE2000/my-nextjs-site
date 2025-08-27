import React from 'react';
import Image from 'next/image';

const ExpertQuote = () => {
  // Base64 encoded SVG for the green wavy line, matching the original site's implementation for pixel-perfect accuracy.
  const wavyLineSvg = 
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCA5NjIgMjIiPjxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNjhCMjkxIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTAgMjEuNUMyNDAuNSAyMS41IDI0MC41LjUgNDgxIC41UzcyMS41IDIxLjUgOTYyIDIxLjUiLz48L3N2Zz4=";

  return (
    <section className="bg-gradient-to-b from-background via-blue-50/30 to-background py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-100 rounded-full blur-3xl"></div>
      </div>

      {/* Decorative wavy line separator */}
      <div 
        style={{ backgroundImage: `url('${wavyLineSvg}')` }}
        className="h-[22px] bg-repeat-x bg-center mb-20 animate-fade-in"
        aria-hidden="true"
      ></div>

      <div className="container text-center flex flex-col items-center relative z-10">
        <div className="animate-slide-up">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full p-6 mb-8 shadow-lg">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/svgs/puppyquote-9.svg?"
              alt="Quotation mark"
              width={47} 
              height={38}
              className="drop-shadow-sm"
            />
          </div>

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Expert Opinion
          </div>
        </div>

        <blockquote className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
          <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-10 shadow-xl">
            <p className="font-serif italic text-[24px] text-foreground leading-[1.7] mb-10 font-medium">
              "At PuppySpot, our Scientific Advisory Board sets science-based standards to ensure the health and welfare of breeding dogs and puppies. Our expertise helps maintain our commitment to responsible breeding and the long-term well-being of every puppy in our network."
            </p>
          </div>
        </blockquote>

        <figure className="flex flex-col items-center mt-12 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full scale-110 opacity-30 blur-xl"></div>
            <Image
              src="https://cdn.buttercms.com/dg2d8VpETouUDTvQIdfV"
              alt="John J. Goldberg"
              width={100}
              height={100}
              className="rounded-full mb-6 relative z-10 shadow-xl border-4 border-white"
            />
          </div>
          <figcaption className="text-center">
            <p className="text-lg font-bold text-foreground font-display">John J. Goldberg</p>
            <div className="mt-2 space-y-1">
              <p className="text-sm text-primary font-medium">Chairman, PuppySpot Scientific Advisory Board</p>
              <p className="text-sm text-muted-foreground">Former Sr. Science Advisor, US House of Representatives</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ExpertQuote;