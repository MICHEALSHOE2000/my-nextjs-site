"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Sprout, Dog, CalendarDays, Paintbrush, Heart, CheckCircle, ArrowLeft } from 'lucide-react';
import ContactForm from './contact-form';

interface Puppy {
  id: number;
  name: string;
  breed: string;
  age: string;
  gender: string;
  color: string;
  price: string;
  isChampion: boolean;
  isReserved?: boolean;
  ownerReview: {
    name: string;
    date: string;
    review: string;
    rating: number;
    image: string;
  };
}

const puppiesData: {[key: number]: Puppy;} = {
  1: {
    id: 1,
    name: 'Jax',
    breed: 'Goldendoodle',
    age: '7 weeks',
    gender: 'Male',
    color: 'Golden',
    price: '$995',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503942260_medium-2.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503942260_medium-2.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503942260_medium-2.jpg'],

    description: [
    'Meet Jax, an adorable Goldendoodle with a heart of gold! This sweet boy is the perfect combination of Golden Retriever loyalty and Poodle intelligence. Jax has been lovingly raised in a family environment and is well-socialized with children and other pets.',
    'At just 7 weeks old, Jax is already showing his playful and gentle nature. He\'s up-to-date on all vaccinations and has received excellent veterinary care. This little guy will make the perfect family companion for those seeking a loyal, intelligent, and loving furry friend.'],

    ownerReview: {
      name: 'Sarah M.',
      date: 'October 2024',
      review: 'Jax has been the most wonderful addition to our family! He\'s so gentle with our kids and incredibly smart. The adoption process was smooth and professional. We couldn\'t be happier with our new furry family member!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503942260_medium-2.jpg'
    }
  },
  2: {
    id: 2,
    name: 'Minerva',
    breed: 'Pomsky',
    age: '6 weeks',
    gender: 'Female',
    color: 'Gray & White',
    price: '$1,199',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503970477_medium-4.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503970477_medium-4.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503970477_medium-4.jpg'],

    description: [
    'Introducing Minerva, a stunning Pomsky with striking markings and the most beautiful blue eyes! This little princess combines the best of both Pomeranian charm and Siberian Husky intelligence. She\'s been raised with love and attention in a caring home environment.',
    'Minerva is a confident and playful puppy who loves to explore and learn new things. She\'s already showing great progress with basic training and socialization. Her compact size makes her perfect for various living situations while maintaining that gorgeous husky appearance.'],

    ownerReview: {
      name: 'Michael R.',
      date: 'September 2024',
      review: 'Minerva is absolutely gorgeous and has such a wonderful personality! She\'s incredibly smart and has adapted to our home so quickly. The entire team was professional and caring throughout the process.',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503970477_medium-4.jpg'
    }
  },
  3: {
    id: 3,
    name: 'Fawn',
    breed: 'Cockapoo',
    age: '5 weeks',
    gender: 'Female',
    color: 'Apricot',
    price: '$899',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503985456_medium-5.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503985456_medium-5.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503985456_medium-5.jpg'],

    description: [
    'Meet Fawn, a sweet Cockapoo with the most adorable apricot coat! This little bundle of joy combines the gentle nature of a Cocker Spaniel with the intelligence of a Poodle. She\'s been raised in a loving family environment and is well-socialized.',
    'At just 5 weeks old, Fawn is already showing her playful and affectionate personality. She loves cuddles and is eager to please, making her an excellent candidate for training. Her hypoallergenic coat makes her perfect for families with allergies.'],

    ownerReview: {
      name: 'Lisa K.',
      date: 'August 2024',
      review: 'Fawn is the sweetest little girl! She has brought so much joy to our family. Her gentle nature makes her perfect with our children, and she\'s incredibly smart. We love her so much!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503985456_medium-5.jpg'
    }
  },
  4: {
    id: 4,
    name: 'Tiffany',
    breed: 'Chihuahua',
    age: '3 weeks',
    gender: 'Female',
    color: 'Cream',
    price: '$825',
    isChampion: true,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503977382_medium-6.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503977382_medium-6.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503977382_medium-6.jpg'],

    description: [
    'Introducing Tiffany, a precious Chihuahua from champion bloodlines! This tiny princess has a big personality and an even bigger heart. Despite her small size, she\'s brave, loyal, and incredibly devoted to her family.',
    'Tiffany comes from an exceptional lineage of champion Chihuahuas and has been carefully bred for temperament and health. At just 3 weeks old, she\'s already showing signs of the intelligence and spunk that makes Chihuahuas such beloved companions.'],

    ownerReview: {
      name: 'David P.',
      date: 'July 2024',
      review: 'Tiffany may be small, but she has such a big personality! She\'s incredibly loyal and has become my constant companion. Her champion bloodline really shows in her beautiful conformation and temperament.',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503977382_medium-6.jpg'
    }
  },
  5: {
    id: 5,
    name: 'Jasmine',
    breed: 'Cavapoo',
    age: '6 weeks',
    gender: 'Female',
    color: 'Tri-Color',
    price: '$950',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503961229_medium-7.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503961229_medium-7.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503961229_medium-7.jpg'],

    description: [
    'Meet Jasmine, a beautiful Cavapoo with stunning tri-color markings! This sweet girl combines the gentle nature of a Cavalier King Charles Spaniel with the intelligence of a Poodle. She\'s been raised with lots of love and attention.',
    'Jasmine is a social butterfly who loves meeting new people and playing with other pets. Her beautiful coat is low-shedding and perfect for families with allergies. She\'s already showing great potential for training and will make a wonderful family companion.'],

    ownerReview: {
      name: 'Jennifer T.',
      date: 'September 2024',
      review: 'Jasmine is absolutely perfect! Her tri-color markings are stunning and her personality is even more beautiful. She\'s so gentle and loving, especially with our children. We couldn\'t have asked for a better puppy!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503961229_medium-7.jpg'
    }
  },
  6: {
    id: 6,
    name: 'Diamond',
    breed: 'Havanese',
    age: '10 weeks',
    gender: 'Female',
    color: 'White & Brown',
    price: '$1,050',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503936808_medium-8.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503936808_medium-8.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503936808_medium-8.jpg'],

    description: [
    'Introducing Diamond, a gorgeous Havanese with a silky white and brown coat that truly sparkles like her name suggests! This little gem is the perfect combination of beauty, intelligence, and affection. She\'s been raised in a loving home environment.',
    'Diamond is a confident and outgoing puppy who loves to play and explore. At 10 weeks old, she\'s already well-socialized and has been exposed to various sights and sounds. Her compact size and gentle nature make her perfect for apartment living or larger homes.'],

    ownerReview: {
      name: 'Robert S.',
      date: 'October 2024',
      review: 'Diamond is truly a gem! Her beautiful coat and sweet personality have won over everyone she meets. She\'s incredibly smart and has learned basic commands so quickly. We\'re so grateful to have her in our family!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503936808_medium-8.jpg'
    }
  },
  7: {
    id: 7,
    name: 'Kobe',
    breed: 'Goldendoodle',
    age: '18 weeks',
    gender: 'Male',
    color: 'Golden',
    price: '$875',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503936529_medium-9.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503936529_medium-9.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503936529_medium-9.jpg'],

    description: [
    'Meet Kobe, a bundle of joy and fluff! This Goldendoodle is not only handsome with his golden coat but also has a personality that shines just as bright. He has been raised in a loving family environment and is well-socialized with children and other pets, making him the perfect addition to any family.',
    'Kobe is up-to-date on all his vaccinations and has undergone a comprehensive health check by our trusted veterinarian. He is intelligent, eager to please, and already showing great potential in potty training. Whether you\'re looking for a loyal companion for your daily runs or a cuddly friend for movie nights, Kobe is your boy!'],

    ownerReview: {
      name: 'Jane D.',
      date: 'August 2024',
      review: 'We are so in love with our little Kobe! He arrived happy, healthy, and so well-adjusted. The entire process was seamless, and we couldn\'t be more grateful for our new family member. He brings so much joy and laughter into our home every day!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503936529_medium-9.jpg'
    }
  },
  8: {
    id: 8,
    name: 'Nancy',
    breed: 'Havanese',
    age: '13 weeks',
    gender: 'Female',
    color: 'Chocolate & White',
    price: '$1,125',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503976994_medium-10.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503976994_medium-10.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503976994_medium-10.jpg'],

    description: [
    'Introducing Nancy, a sweet Havanese with a beautiful chocolate and white coat! This little lady has the most gentle and loving personality. She\'s been carefully socialized and is comfortable with children, adults, and other pets.',
    'Nancy is intelligent and eager to learn, making training a joy. At 13 weeks old, she\'s developing into a confident and well-adjusted puppy. Her silky coat and expressive eyes make her absolutely irresistible, and her loving nature will melt your heart.'],

    ownerReview: {
      name: 'Amanda L.',
      date: 'September 2024',
      review: 'Nancy is such a sweet soul! Her chocolate and white markings are gorgeous, but her personality is what really captured our hearts. She\'s incredibly gentle and has fit into our family perfectly. Highly recommend!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503976994_medium-10.jpg'
    }
  },
  9: {
    id: 9,
    name: 'Skittles',
    breed: 'Cavapoo',
    age: '6 weeks',
    gender: 'Male',
    color: 'Red',
    price: '$925',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503964911_medium-11.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503964911_medium-11.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503964911_medium-11.jpg'],

    description: [
    'Meet Skittles, a vibrant Cavapoo with a beautiful red coat that matches his colorful personality! This little guy is full of energy and love. He combines the best traits of Cavalier King Charles Spaniel and Poodle breeds.',
    'Skittles is a playful and affectionate puppy who loves to explore and learn new things. His hypoallergenic coat makes him perfect for families with allergies, and his friendly nature ensures he\'ll get along well with children and other pets.'],

    ownerReview: {
      name: 'Carlos M.',
      date: 'October 2024',
      review: 'Skittles lives up to his name - he\'s brought so many colors of joy to our lives! His red coat is stunning and his personality is even more vibrant. He\'s incredibly smart and loving. Perfect addition to our family!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503964911_medium-11.jpg'
    }
  },
  10: {
    id: 10,
    name: 'Amos',
    breed: 'Bernedoodle',
    age: '7 weeks',
    gender: 'Male',
    color: 'Tri-Color',
    price: '$1,175',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503951353_medium-13.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503951353_medium-13.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503951353_medium-13.jpg'],

    description: [
    'Introducing Amos, a magnificent Bernedoodle with stunning tri-color markings! This gentle giant combines the calm, friendly nature of a Bernese Mountain Dog with the intelligence and hypoallergenic qualities of a Poodle.',
    'Amos is a sweet and patient puppy who will grow into a loyal family companion. His beautiful tri-color coat and gentle temperament make him perfect for families with children. He\'s already showing signs of the intelligence that Bernedoodles are known for.'],

    ownerReview: {
      name: 'Patricia W.',
      date: 'August 2024',
      review: 'Amos is absolutely wonderful! His tri-color markings are beautiful and his gentle nature makes him perfect with our kids. Even as a puppy, you can see what a great family dog he\'ll become. We love him so much!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503951353_medium-13.jpg'
    }
  },
  11: {
    id: 11,
    name: 'Birdie',
    breed: 'Havanese',
    age: '18 weeks',
    gender: 'Female',
    color: 'Cream & Gold',
    price: '$800',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503981828_medium-14.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503981828_medium-14.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503981828_medium-14.jpg'],

    description: [
    'Meet Birdie, a delightful Havanese with a gorgeous cream and gold coat! This little songbird has a personality as beautiful as her coloring. She\'s been well-socialized and is comfortable in various environments.',
    'At 18 weeks old, Birdie is developing into a confident and well-mannered young lady. Her silky coat and expressive eyes are captivating, but it\'s her sweet and loving personality that will truly win your heart.'],

    ownerReview: {
      name: 'Thomas H.',
      date: 'July 2024',
      review: 'Birdie is such a sweetheart! Her cream and gold coloring is absolutely gorgeous, and she has the most wonderful temperament. She\'s been so easy to train and has brought endless joy to our home.',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503981828_medium-14.jpg'
    }
  },
  12: {
    id: 12,
    name: 'Stormy',
    breed: 'Corgipoo',
    age: '12 weeks',
    gender: 'Male',
    color: 'Blue Merle',
    price: '$1,095',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503964519_medium-15.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503964519_medium-15.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503964519_medium-15.jpg'],

    description: [
    'Introducing Stormy, a unique Corgipoo with stunning blue merle coloring! This handsome boy combines the intelligence of a Poodle with the herding instincts and charm of a Corgi. His distinctive coat pattern is truly eye-catching.',
    'Stormy is an energetic and intelligent puppy who loves to play and learn. His compact size and friendly personality make him adaptable to various living situations. He\'s already showing the loyalty and devotion that both parent breeds are known for.'],

    ownerReview: {
      name: 'Maria C.',
      date: 'September 2024',
      review: 'Stormy\'s blue merle coloring is absolutely stunning! He\'s such a smart and energetic boy who keeps us entertained every day. His unique looks and wonderful personality make him truly special. We adore him!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503964519_medium-15.jpg'
    }
  },
  13: {
    id: 13,
    name: 'Priss',
    breed: 'Dachshund',
    age: '16 weeks',
    gender: 'Female',
    color: 'Black & Tan',
    price: '$975',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503971832_medium-16.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503971832_medium-16.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503971832_medium-16.jpg'],

    description: [
    'Meet Priss, an adorable Dachshund with classic black and tan coloring! This little lady has the spunky personality that Dachshunds are famous for. She\'s brave, loyal, and incredibly devoted to her family.',
    'Priss may be small in stature, but she has a big personality and an even bigger heart. At 16 weeks old, she\'s developing into a confident and well-socialized puppy. Her distinctive long body and short legs make her absolutely irresistible.'],

    ownerReview: {
      name: 'Kevin B.',
      date: 'October 2024',
      review: 'Priss is such a character! Her black and tan coloring is classic Dachshund, and her personality is just as wonderful. She\'s brave, loyal, and has brought so much laughter to our home. Perfect little companion!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503971832_medium-16.jpg'
    }
  },
  14: {
    id: 14,
    name: 'Sandra',
    breed: 'German Shepherd',
    age: '6 weeks',
    gender: 'Female',
    color: 'Black & Tan',
    price: '$1,150',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503959247_medium-17.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503959247_medium-17.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503959247_medium-17.jpg'],

    description: [
    'Introducing Sandra, a beautiful German Shepherd puppy with classic black and tan markings! This intelligent and loyal girl comes from excellent bloodlines and has been carefully socialized from birth.',
    'Sandra is already showing the intelligence, loyalty, and protective instincts that German Shepherds are renowned for. At just 6 weeks old, she\'s alert, confident, and eager to learn. She\'ll grow into a devoted family guardian and companion.'],

    ownerReview: {
      name: 'Rachel F.',
      date: 'August 2024',
      review: 'Sandra is everything we hoped for in a German Shepherd! Even as a young puppy, her intelligence and loyalty shine through. Her black and tan markings are beautiful, and she\'s going to be an amazing family protector and companion.',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503959247_medium-17.jpg'
    }
  },
  15: {
    id: 15,
    name: 'Joy',
    breed: 'Havapoo',
    age: '17 weeks',
    gender: 'Female',
    color: 'Apricot & White',
    price: '$850',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503984088_medium-18.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503984088_medium-18.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503984088_medium-18.jpg'],

    description: [
    'Meet Joy, a delightful Havapoo with beautiful apricot and white markings! This sweet girl truly lives up to her name, bringing happiness wherever she goes. She combines the gentle nature of a Havanese with Poodle intelligence.',
    'Joy is a well-socialized puppy who loves people and other pets. At 17 weeks old, she\'s developing into a confident and well-mannered young lady. Her hypoallergenic coat and loving personality make her perfect for any family.'],

    ownerReview: {
      name: 'Steven G.',
      date: 'September 2024',
      review: 'Joy truly brings joy to our lives every single day! Her apricot and white coloring is gorgeous, but it\'s her sweet personality that really captured our hearts. She\'s incredibly loving and has fit into our family perfectly.',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503984088_medium-18.jpg'
    }
  },
  16: {
    id: 16,
    name: 'Alani',
    breed: 'Pomeranian',
    age: '14 weeks',
    gender: 'Female',
    color: 'Orange Sable',
    price: '$1,200',
    isChampion: true,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503983150_medium-19.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503983150_medium-19.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503983150_medium-19.jpg'],

    description: [
    'Introducing Alani, a stunning Pomeranian from champion bloodlines with gorgeous orange sable coloring! This little princess has the perfect combination of beauty, intelligence, and spunk that makes Pomeranians so beloved.',
    'Alani comes from exceptional champion lines and has been bred for both temperament and conformation. At 14 weeks old, she\'s showing all the qualities of a show-quality Pomeranian. Her fluffy coat and bright personality make her absolutely irresistible.'],

    ownerReview: {
      name: 'Diana R.',
      date: 'October 2024',
      review: 'Alani is absolutely gorgeous! Her champion bloodline really shows in her beautiful orange sable coat and perfect conformation. She has such a delightful personality and has brought so much happiness to our home. Truly special!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503983150_medium-19.jpg'
    }
  },
  17: {
    id: 17,
    name: 'Lance',
    breed: 'Poodle',
    age: '6 weeks',
    gender: 'Male',
    color: 'Black',
    price: '$925',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503942260_medium-2.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503942260_medium-2.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503942260_medium-2.jpg'],

    description: [
    'Meet Lance, a handsome black Poodle with intelligence and elegance! This smart boy represents everything wonderful about the Poodle breed - intelligence, trainability, and a hypoallergenic coat that\'s perfect for families with allergies.',
    'Lance is an eager learner who loves mental stimulation and play. At just 6 weeks old, he\'s already showing the intelligence and alertness that Poodles are famous for. His sleek black coat and bright personality make him a standout puppy.'],

    ownerReview: {
      name: 'Michelle K.',
      date: 'July 2024',
      review: 'Lance is incredibly smart and such a handsome boy! His black coat is gorgeous and he\'s so eager to learn and please. The intelligence of Poodles really shines through with Lance. Perfect family companion!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503942260_medium-2.jpg'
    }
  },
  18: {
    id: 18,
    name: 'Biggie',
    breed: 'Labrador Retriever',
    age: '8 weeks',
    gender: 'Male',
    color: 'Yellow',
    price: '$1,075',
    isChampion: false,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503970477_medium-4.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503970477_medium-4.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503970477_medium-4.jpg'],

    description: [
    'Introducing Biggie, a wonderful yellow Labrador Retriever with a heart as big as his name suggests! This sweet boy embodies all the best qualities of Labs - loyalty, intelligence, and an incredibly gentle nature with children.',
    'Biggie is a well-socialized puppy who loves everyone he meets. At 8 weeks old, he\'s already showing the friendly and outgoing personality that makes Labradors such beloved family pets. He\'ll grow into a loyal and devoted companion.'],

    ownerReview: {
      name: 'Christopher D.',
      date: 'August 2024',
      review: 'Biggie is everything we wanted in a Lab! His gentle nature with our kids is amazing, and his yellow coat is beautiful. He\'s so smart and eager to please. Perfect family dog - we couldn\'t be happier!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503970477_medium-4.jpg'
    }
  },
  19: {
    id: 19,
    name: 'Rumina',
    breed: 'Yorkipoo',
    age: '9 weeks',
    gender: 'Female',
    color: 'Chocolate & Tan',
    price: '$950',
    isChampion: false,
    isReserved: true,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503985456_medium-5.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503985456_medium-5.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503985456_medium-5.jpg'],

    description: [
    'Meet Rumina, a precious Yorkipoo with gorgeous chocolate and tan coloring! This little princess combines the spunky personality of a Yorkshire Terrier with the intelligence and hypoallergenic qualities of a Poodle.',
    'Rumina is a confident and playful puppy who loves attention and affection. At 9 weeks old, she\'s developing into a well-socialized and charming little lady. Her compact size and loving nature make her perfect for various living situations.'],

    ownerReview: {
      name: 'Ashley N.',
      date: 'September 2024',
      review: 'Rumina is such a sweetheart! Her chocolate and tan coloring is absolutely beautiful, and she has the most wonderful personality. She\'s tiny but mighty, with so much love to give. We\'re so grateful she\'s part of our family!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503985456_medium-5.jpg'
    }
  },
  20: {
    id: 20,
    name: 'Isabelle',
    breed: 'Maltipoo',
    age: '11 weeks',
    gender: 'Female',
    color: 'White & Apricot',
    price: '$1,125',
    isChampion: true,
    images: [
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503977382_medium-6.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503977382_medium-6.jpg',
    'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503977382_medium-6.jpg'],

    description: [
    'Introducing Isabelle, a stunning Maltipoo from champion bloodlines with beautiful white and apricot markings! This elegant little lady combines the gentle nature of a Maltese with the intelligence and hypoallergenic qualities of a Poodle.',
    'Isabelle comes from exceptional champion lines and has been carefully bred for temperament and health. At 11 weeks old, she\'s showing all the qualities that make Maltipoos such wonderful companions. Her silky coat and sweet personality are absolutely captivating.'],

    ownerReview: {
      name: 'Elizabeth P.',
      date: 'October 2024',
      review: 'Isabelle is absolutely perfect! Her champion bloodline really shows in her beautiful white and apricot coat and excellent temperament. She\'s incredibly gentle and loving, and has brought so much joy to our family. Truly exceptional!',
      rating: 5,
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/fcc87ae0-ed43-4816-9531-46e7e1bafe5d-puppyspot-com/assets/images/503977382_medium-6.jpg'
    }
  }
};

interface PuppyDetailProps {
  puppyId?: number;
}

export default function PuppyDetail({ puppyId = 1 }: PuppyDetailProps) {
  const puppyData = puppiesData[puppyId] || puppiesData[1];
  const [mainImage, setMainImage] = useState(puppyData.images[0]);

  const detailItems = [
  { icon: <Heart className="text-primary" />, label: "Gender", value: puppyData.gender },
  { icon: <CalendarDays className="text-primary" />, label: "Age", value: puppyData.age },
  { icon: <Paintbrush className="text-primary" />, label: "Color", value: puppyData.color },
  { icon: <Dog className="text-primary" />, label: "Breed", value: puppyData.breed }];

  // Create puppy object for contact form
  const puppyInfo = {
    name: puppyData.name,
    breed: puppyData.breed,
    price: puppyData.price
  };

  return (
    <div className="bg-background font-body">
      <div className="container py-8 md:py-16">
        {/* Back to Home Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Puppies</span>
        </Link>

        {/* Champion Badge */}
        {puppyData.isChampion &&
        <div className="mb-4 inline-block bg-[#FFD700] text-black text-sm font-semibold px-4 py-2 rounded-lg">
            Champion Bloodlines
          </div>
        }
        
        {/* Reserved Badge */}
        {puppyData.isReserved &&
        <div className="mb-4 inline-block bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2 rounded-lg ml-2">
            Reserved
          </div>
        }

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-md mb-4 border border-border">
              <Image src={mainImage} alt={`Main image of ${puppyData.name}`} layout="fill" objectFit="cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {puppyData.images.map((img, idx) =>
              <div key={idx} className={`relative aspect-square w-full overflow-hidden rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-primary' : 'border-transparent'}`} onClick={() => setMainImage(img)}>
                  <Image src={img} alt={`Thumbnail ${idx + 1} of ${puppyData.name}`} layout="fill" objectFit="cover" />
                </div>
              )}
            </div>
          </div>

          {/* Puppy Details */}
          <div className="flex flex-col">
            <h1 className="text-[32px] font-bold font-display text-foreground">{puppyData.name}</h1>
            <p className="text-lg text-muted-foreground mt-1 mb-2">The perfect {puppyData.breed} companion awaits.</p>
            <p className="text-xl font-semibold text-primary mb-6">{puppyData.price}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {detailItems.map((item) =>
              <div key={item.label} className="flex items-center space-x-3 bg-secondary p-4 rounded-lg border border-border">
                  {item.icon}
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-card-foreground">{item.value}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-auto">
              <ContactForm puppy={puppyInfo}>
                <button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 px-6 text-lg font-semibold rounded-lg transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  disabled={puppyData.isReserved}>
                    {puppyData.isReserved ? 'Currently Reserved' : 'Take Me Home'}
                </button>
              </ContactForm>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mt-16">
          <h2 className="text-[24px] font-bold font-display text-foreground mb-4">About {puppyData.name}</h2>
          <div className="space-y-4 text-muted-foreground text-sm">
            {puppyData.description.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        {/* Customer Review Section */}
        <div className="mt-16">
            <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20">
                <h2 className="text-center text-[24px] font-bold font-display text-foreground mb-6">What a Happy Owner Says</h2>
                <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
                    <div className="relative w-48 h-48 flex-shrink-0">
                        <Image src={puppyData.ownerReview.image} alt={`Reviewer's puppy`} layout="fill" objectFit="cover" className="rounded-full border-4 border-white shadow-md" />
                    </div>
                    <div className="text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                            {[...Array(puppyData.ownerReview.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                        </div>
                        <blockquote className="italic text-foreground mb-4">&quot;{puppyData.ownerReview.review}&quot;</blockquote>    
                        <div className="flex items-center justify-center md:justify-start space-x-2">
                             <CheckCircle className="w-5 h-5 text-primary" />
                             <p className="font-semibold text-foreground">{puppyData.ownerReview.name}</p>
                             <span className="text-muted-foreground">&bull;</span>
                             <p className="text-muted-foreground text-sm">{puppyData.ownerReview.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>);
}