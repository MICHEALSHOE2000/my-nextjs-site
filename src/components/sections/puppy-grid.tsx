"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ChevronDown, ChevronRight, ArrowUpDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

type Puppy = {
  id: number;
  name: string;
  breed: string;
  age: string;
  price: string;
  imageUrl: string;
  hasVideo: boolean;
  isChampion: boolean;
  isReserved?: boolean;
};

const puppiesData: Puppy[] = [
  { id: 1, name: 'Jax', breed: 'Goldendoodle', age: '7 weeks', price: '$995', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503942260_medium-2.jpg', hasVideo: false, isChampion: false },
  { id: 2, name: 'Minerva', breed: 'Pomsky', age: '6 weeks', price: '$1,199', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503970477_medium-4.jpg', hasVideo: true, isChampion: false },
  { id: 3, name: 'Fawn', breed: 'Cockapoo', age: '5 weeks', price: '$899', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503985456_medium-5.jpg', hasVideo: false, isChampion: false },
  { id: 4, name: 'Tiffany', breed: 'Chihuahua', age: '3 weeks', price: '$825', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503977382_medium-6.jpg', hasVideo: false, isChampion: true },
  { id: 5, name: 'Jasmine', breed: 'Cavapoo', age: '6 weeks', price: '$950', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503961229_medium-7.jpg', hasVideo: false, isChampion: false },
  { id: 6, name: 'Diamond', breed: 'Havanese', age: '10 weeks', price: '$1,050', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503936808_medium-8.jpg', hasVideo: true, isChampion: false },
  { id: 7, name: 'Kobe', breed: 'Goldendoodle', age: '18 weeks', price: '$875', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503936529_medium-9.jpg', hasVideo: true, isChampion: false },
  { id: 8, name: 'Nancy', breed: 'Havanese', age: '13 weeks', price: '$1,125', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503976994_medium-10.jpg', hasVideo: true, isChampion: false },
  { id: 9, name: 'Skittles', breed: 'Cavapoo', age: '6 weeks', price: '$925', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503964911_medium-11.jpg', hasVideo: false, isChampion: false },
  { id: 10, name: 'Amos', breed: 'Bernedoodle', age: '7 weeks', price: '$1,175', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503951353_medium-13.jpg', hasVideo: true, isChampion: false },
  { id: 11, name: 'Birdie', breed: 'Havanese', age: '18 weeks', price: '$800', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503981828_medium-14.jpg', hasVideo: true, isChampion: false },
  { id: 12, name: 'Stormy', breed: 'Corgipoo', age: '12 weeks', price: '$1,095', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503964519_medium-15.jpg', hasVideo: false, isChampion: false },
  { id: 13, name: 'Priss', breed: 'Dachshund', age: '16 weeks', price: '$975', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503971832_medium-16.jpg', hasVideo: true, isChampion: false },
  { id: 14, name: 'Sandra', breed: 'German Shepherd', age: '6 weeks', price: '$1,150', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503959247_medium-17.jpg', hasVideo: true, isChampion: false },
  { id: 15, name: 'Joy', breed: 'Havapoo', age: '17 weeks', price: '$850', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503984088_medium-18.jpg', hasVideo: true, isChampion: false },
  { id: 16, name: 'Alani', breed: 'Pomeranian', age: '14 weeks', price: '$1,200', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503983150_medium-19.jpg', hasVideo: true, isChampion: true },
  { id: 17, name: 'Lance', breed: 'Poodle', age: '6 weeks', price: '$925', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503942260_medium-2.jpg', hasVideo: true, isChampion: false },
  { id: 18, name: 'Biggie', breed: 'Labrador Retriever', age: '8 weeks', price: '$1,075', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503970477_medium-4.jpg', hasVideo: true, isChampion: false },
  { id: 19, name: 'Rumina', breed: 'Yorkipoo', age: '9 weeks', price: '$950', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503985456_medium-5.jpg', hasVideo: true, isChampion: false, isReserved: true },
  { id: 20, name: 'Isabelle', breed: 'Maltipoo', age: '11 weeks', price: '$1,125', imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503977382_medium-6.jpg', hasVideo: true, isChampion: true },
];

const PuppyCard = ({ puppy }: { puppy: Puppy }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Link href={`/puppy/${puppy.id}`} className="block bg-card rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 smooth-transition hover-lift group">
      <div className="relative overflow-hidden">
        <Image
          src={puppy.imageUrl}
          alt={`${puppy.breed} puppy for sale ${puppy.name}, dog for sale`}
          width={280}
          height={280}
          className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {puppy.hasVideo && (
          <div className="absolute top-3 left-3 bg-black/70 p-2 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/svgs/video-icon-6.svg?"
                  alt="Video icon"
                  width={16}
                  height={16}
              />
          </div>
        )}
        {puppy.isChampion && (
          <div className="absolute bottom-0 w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold text-center py-2 shadow-sm">
            ⭐ Champion Bloodlines
          </div>
        )}
         {puppy.isReserved && (
          <div className="absolute bottom-0 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold text-center py-2 shadow-sm">
            🔒 Reserved
          </div>
        )}
      </div>
      <div className="p-5 flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-card-foreground font-display mb-1">{puppy.name}</h3>
          <p className="text-sm text-muted-foreground mb-1">{puppy.breed}</p>
          <p className="text-sm text-muted-foreground mb-2">{puppy.age}</p>
          <p className="text-lg font-bold text-primary">{puppy.price}</p>
        </div>
        <button 
          className={`p-2 rounded-full transition-all duration-200 ${
            isFavorited 
              ? 'text-red-500 bg-red-50 hover:bg-red-100' 
              : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
          }`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsFavorited(!isFavorited);
          }}
        >
          <Heart 
            className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`}
            strokeWidth={isFavorited ? 0 : 1.5} 
          />
        </button>
      </div>
    </Link>
  );
};

const Pagination = () => (
  <nav aria-label="Pagination" className="mt-12 flex justify-center items-center space-x-2 text-sm">
    <Button variant="default" size="sm" className="w-9 h-9 rounded-full">1</Button>
    <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full hover:bg-primary hover:text-white">2</Button>
    <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full hover:bg-primary hover:text-white">3</Button>
    <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full hover:bg-primary hover:text-white">4</Button>
    <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full hover:bg-primary hover:text-white">5</Button>
    <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full hover:bg-primary hover:text-white">6</Button>
    <span className="text-muted-foreground px-2">...</span>
    <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full hover:bg-primary hover:text-white">85</Button>
    <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary hover:text-white">
      <ChevronRight className="w-4 h-4" />
    </Button>
  </nav>
);

const PuppyGrid = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">1,698</span> puppies
        </p>
        <Button variant="outline" className="flex items-center space-x-2 text-sm text-foreground font-medium border-gray-300 hover:border-primary hover:text-primary">
          <ArrowUpDown className="w-4 h-4" />
          <span>Sort by Featured</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
        {puppiesData.map((puppy, index) => (
          <div 
            key={puppy.id} 
            className="animate-slide-up" 
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <PuppyCard puppy={puppy} />
          </div>
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default PuppyGrid;