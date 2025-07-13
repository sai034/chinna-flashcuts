'use client';
import React from 'react';
import Link from 'next/link';

export default function BrandValue() {
  const values = [
    {
      title: 'Quality & Expertise',
      description: 'We deliver exceptional beauty services using premium products and skilled professionals, ensuring outstanding results every time.',
    },
    {
      title: 'Personalized Care',
      description: 'Our tailored services cater to your unique needs, creating a bespoke experience that enhances your natural beauty and wellness.',
    },
  ];

  return (
    <section className="bg-gray-800 text-white py-8 px-4 sm:px-8 lg:px-12 mt-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-sans">
          Our Brand Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 transition-all duration-300 cursor-pointer max-w-md mx-auto"
            >
              <h3 className="text-base sm:text-lg font-semibold text-center text-white mb-2">{value.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 text-center">{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}