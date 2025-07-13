'use client';
import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gray-800 py-4 px-4 sm:px-6 lg:px-8 text-center mt-24 sm:mt-20 md:mt-0">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold mb-6 mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-sans">
          Welcome to Chinna FlashCuts
        </h1>
        <p className="text-md md:text-xl lg:text-xl text-gray-300 leading-relaxed mb-8 font-sans">
          Indulge in personalized beauty and wellness experiences crafted to rejuvenate and empower you at Chinna FlashCuts - Tirupati.
        </p>

      </div>
    </section>

  );
}