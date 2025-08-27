"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    image: 'https://cdn.buttercms.com/slpkf2UTV6A1yB23jgFw',
    text: "Boomer is a healthy well adjusted little puppy. He arrived clean and very happy.",
    author: "Kathryn A.",
    date: "July 2025"
  },
  {
    image: 'https://photos.puppyspot.com/1/review-photo/6331/photo/69228_medium.jpeg',
    text: "I recently purchased a puppy and had such a wonderful experience with PuppySpot that my husband decided to buy one as well! The service was excellent from the moment we reserved our puppies to their delivery. If we ever decide to get another puppy, we will definitely choose PuppySpot again.",
    author: "Dianna H.",
    date: "June 2025"
  },
  {
    image: 'https://photos.puppyspot.com/5/review-photo/6025/photo/67175_medium.jpeg',
    text: "She is beautiful love her long ears great delivery fit in quite amazing with my other babies great customer service everyone kept me well informed of everything that was going on and going to happen very happy with Puppy Spot",
    author: "Viola A A.",
    date: "May 2025"
  },
  {
    image: 'https://cdn.buttercms.com/sYtZl4QvS8iCq2NpimDA',
    text: "Love the new dog so much.",
    author: "Linda R.",
    date: "May 2025"
  },
];

const StarRating = () => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-6 h-6 text-[#FFD700] fill-current drop-shadow-sm" />
    ))}
  </div>
);

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-gradient-to-br from-green-50 via-background to-green-50/50 py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#f8fdfc] to-[#f0f9f8] rounded-3xl border border-green-100 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-transparent pointer-events-none"></div>
          
          <div className="pt-16 pb-12 px-4 md:px-10 relative">
            <div className="text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Trusted Reviews
              </div>
              <p className="font-semibold text-foreground/80 text-base">One spot Families trust</p>
              <h2 className="text-[32px] font-bold text-foreground mt-2 font-display">
                Puppies found their forever families
              </h2>
            </div>
            
            <div className="mt-12 relative max-w-5xl mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonialsData.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full"
                    >
                      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-left bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-green-100">
                        <div className="flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={`Testimonial from ${testimonial.author}`}
                            width={280}
                            height={280}
                            className="rounded-2xl object-cover w-[280px] h-[280px] shadow-lg hover:shadow-xl transition-shadow duration-300"
                          />
                        </div>
                        <div className="flex-1 max-w-md">
                          <StarRating />
                          <p className="mt-6 text-foreground text-[18px] leading-[1.7] font-medium">
                            "{testimonial.text}"
                          </p>
                          <div className="mt-6 flex items-center gap-3">
                            <Image
                              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/svgs/trusted-by-community-verified-heart-8.svg?"
                              alt="Verified"
                              width={24}
                              height={24}
                              className="flex-shrink-0"
                            />
                            <div>
                              <p className="font-bold text-sm text-foreground">{testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentIndex === index 
                        ? 'bg-primary shadow-md' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-white transition-all duration-200 z-10 border border-green-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-white transition-all duration-200 z-10 border border-green-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        <div className="text-center mt-10 animate-slide-up">
          <a
            href="https://www.puppyspot.com/reviews"
            className="inline-block bg-white text-foreground text-sm font-semibold px-8 py-4 rounded-full border border-primary shadow-sm hover:shadow-md hover:bg-green-50 transition-all duration-200 hover:scale-105"
          >
            Read all reviews →
          </a>
        </div>
      </div>
    </section>
  );
}