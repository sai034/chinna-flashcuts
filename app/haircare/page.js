"use client"
import React from 'react';
import Link from 'next/link';

export default function HairCareService() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20book%20an%20appointment`;
  const hairServices = [
    {
      name: "Signature Hair Coloring",
      description: "Custom color blending using ammonia-free dyes for vibrant, natural-looking results that complement your skin tone and personal style."
    },
    {
      name: "Keratin Smoothing Therapy",
      description: "Professional frizz-reduction treatment that protects hair while creating sleek, manageable styles lasting up to 3 months."
    },
    {
      name: "Luxury Hair Spa Treatment",
      description: "Deep conditioning ritual with hot oil massage, steam therapy, and nutrient-rich masks to repair damage and restore shine."
    },
    {
      name: "Scalp Rejuvenation Program",
      description: "Medical-grade treatment for dandruff, psoriasis, or thinning hair featuring exfoliation, medicated serums, and LED light therapy."
    },
    {
      name: "Precision Haircut & Styling",
      description: "Tailored cuts using advanced techniques to enhance your natural texture and face shape, finished with professional styling."
    }
  ];

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full mt-24 sm:mt-20 md:mt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3998421/pexels-photo-3998421.jpeg')] bg-cover bg-center z-0 group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-0"></div>
      </div>

      {/* Content - Now perfectly matching FacialService structure */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-2">
            Hair Care
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Professional Hair Services</h3>
          <p className="text-gray-200 mb-4">
            Our master stylists customize each service to your hair type and goals, combining cutting-edge techniques
            with premium products for salon-quality results that last.
          </p>

          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-lg">Our Hair Services Include:</h4>
            <ul className="space-y-4">
              {hairServices.map((service, index) => (
                <li key={index} className="bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                  <h5 className="font-medium text-blue-300 flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {service.name}
                  </h5>
                  <p className="text-sm text-gray-200 mt-1 pl-4">{service.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-row justify-between'>
          <div className="flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-center transition-colors duration-300 w-full sm:w-auto"
            >

              Book Now
            </a>


          </div>
          <div className="flex justify-center">
            <a
              href='/'
              className="px-6 py-3 bg-gray-600 hover:bg-gray-800 text-white rounded-lg font-medium text-center transition-colors duration-300 w-full sm:w-auto"
            >
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}