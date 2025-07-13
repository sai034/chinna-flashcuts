'use client';

import React from 'react';
import Link from 'next/link';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Skilled Artisans of Beauty',
      description: 'Our highly trained and certified professionals bring expertise and passion to every service, delivering personalized care that exceeds expectations.',
    },
    {
      title: 'Luxurious, High-Quality Products',
      description: 'We exclusively use premium, industry-leading products tailored to nourish and enhance your skin and hair, ensuring lasting results.',
    },
    {
      title: 'Tranquil Oasis of Relaxation',
      description: 'Step into our serene, spa-inspired environment in Tirupati, designed to rejuvenate your senses and provide a luxurious escape.',
    },
  ];

  return (
    <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 mt-4 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Why Choose Us
        </h2>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md text-center hover:bg-gray-600 hover:scale-105 transition-all duration-300 cursor-pointer max-w-md mx-auto"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}