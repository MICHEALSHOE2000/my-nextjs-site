"use client";

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Using a type for category data for better maintainability
type Category = {
  name: string;
  href: string;
  imageUrl: string;
  bgColor: string;
  borderRadius: string;
};

// Data for the lifestyle categories
const categories: Category[] = [
  {
    name: "Doodle breeds",
    href: "https://www.puppyspot.com/breed/collections/doodle-puppies",
    imageUrl: "https://i.imgur.com/uJkLKyL.png", // Replaced with a placeholder with transparent background
    bgColor: "bg-gradient-to-br from-[#e8f5e8] to-[#d4edda]",
    borderRadius: "rounded-[61%_39%_43%_57%_/_53%_54%_46%_47%]",
  },
  {
    name: "Best apartment breeds",
    href: "https://www.puppyspot.com/breed/collections/best-apartment-dogs",
    imageUrl: "https://i.imgur.com/pA2x1aD.png", // Replaced with a placeholder with transparent background
    bgColor: "bg-gradient-to-br from-[#f8f0ec] to-[#f0e6d2]",
    borderRadius: "rounded-[52%_48%_55%_45%_/_44%_43%_57%_56%]",
  },
  {
    name: "Teacup breeds",
    href: "https://www.puppyspot.com/breed/collections/teacup-puppies",
    imageUrl: "https://i.imgur.com/3Z2h7k8.png", // Replaced with a placeholder with transparent background
    bgColor: "bg-gradient-to-br from-[#e8f5e8] to-[#d4edda]",
    borderRadius: "rounded-[61%_39%_43%_57%_/_53%_54%_46%_47%]",
  },
  {
    name: "Best family breeds",
    href: "https://www.puppyspot.com/breed/collections/best-family-dogs",
    imageUrl: "https://i.imgur.com/Bf5qYI0.png", // Replaced with a placeholder with transparent background
    bgColor: "bg-gradient-to-br from-[#f8f0ec] to-[#f0e6d2]",
    borderRadius: "rounded-[52%_48%_55%_45%_/_44%_43%_57%_56%]",
  },
  {
    name: "Allergy-friendly breeds",
    href: "https://www.puppyspot.com/breed/collections/allergy-friendly-dogs",
    imageUrl: "https://i.imgur.com/KqWqXj0.png", // Replaced with a placeholder with transparent background
    bgColor: "bg-gradient-to-br from-[#e8f5e8] to-[#d4edda]",
    borderRadius: "rounded-[43%_57%_42%_58%_/_53%_54%_46%_47%]",
  },
  {
    name: "Top active breeds",
    href: "https://www.puppyspot.com/breed/collections/active-dogs",
    imageUrl: "https://i.imgur.com/R8kXo9V.png", // Replaced with a placeholder with transparent background
    bgColor: "bg-gradient-to-br from-[#f8f0ec] to-[#f0e6d2]",
    borderRadius: "rounded-[61%_39%_58%_42%_/_44%_43%_57%_56%]",
  },
];

export default function LifestyleCategories() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-gradient-to-b from-[#fefcf8] via-[#faf8f3] to-[#f8f5f0] py-24">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Lifestyle Match
          </div>
          <h3 className="font-bold text-[#333] mb-6 font-display text-4xl">
            Explore by <span className="bg-gradient-to-r from-green-200 to-green-300 px-3 py-2 rounded-xl shadow-sm">Lifestyle</span>
          </h3>
          <p className="text-[#6C6C6C] text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Explore top breed traits curated to match your lifestyle and find the perfect companion for your family.
          </p>
        </div>

        <div className="relative animate-slide-up">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex -ml-6">
              {categories.map((category, index) => (
                <div key={index} className="flex-grow-0 flex-shrink-0 basis-[80%] sm:basis-[48%] md:basis-[32%] lg:basis-[25%] xl:basis-[20%] pl-6">
                  <a href={category.href} className="flex flex-col items-center group text-center">
                    <div className={`relative w-[180px] h-[180px] flex items-center justify-center ${category.bgColor} ${category.borderRadius} transition-all duration-300 group-hover:scale-110 shadow-lg hover:shadow-xl border border-white/50`}>
                      <Image
                        src={category.imageUrl}
                        alt={category.name}
                        width={180}
                        height={180}
                        className="object-contain w-full h-full scale-[0.85] transition-transform duration-300 group-hover:scale-90"
                      />
                      <div className="absolute inset-0 bg-white/10 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span className="mt-6 font-semibold text-[#333] group-hover:text-primary transition-colors duration-200 font-display text-base px-2 py-1 rounded-lg group-hover:bg-white/80">
                      {category.name}
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <button
              onClick={scrollPrev}
              className="absolute top-[90px] -translate-y-1/2 -left-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 z-10 hidden lg:flex border border-green-100 hover:bg-white"
              aria-label="Previous slide"
              disabled={prevBtnDisabled}
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
              onClick={scrollNext}
              className="absolute top-[90px] -translate-y-1/2 -right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 z-10 hidden lg:flex border border-green-100 hover:bg-white"
              aria-label="Next slide"
              disabled={nextBtnDisabled}
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}