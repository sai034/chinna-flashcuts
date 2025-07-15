'use client';
import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa6";
export default function SpaService() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20book%20an%20appointment`;
  const spaTreatments = [
    {
      name: "Body Massage",
      description: "A relaxing full-body therapy that relieves muscle tension, improves circulation, and promotes overall relaxation and well-being."
    },
    {
      name: "Head Massage",
      description: "A soothing massage focusing on the scalp, neck, and shoulders to reduce stress, enhance blood flow, and promote mental clarity."
    },
    {
      name: "Foot Massage",
      description: "A therapeutic treatment applying pressure to specific areas of the feet to ease fatigue, improve circulation, and restore balance."
    },
    {
      name: "Full Body Massage – ₹1199",
      description: "An indulgent full-body massage session designed to relax the muscles, reduce stress, and leave you feeling rejuvenated."
    },
    {
      name: "Pedicure",
      description: "A revitalizing foot care treatment that includes exfoliation, nail shaping, and massage for clean, soft, and refreshed feet."
    },
    {
      name: "Manicure",
      description: "A grooming treatment for the hands that includes nail trimming, cuticle care, exfoliation, and massage for polished, smooth hands."
    }
  ];


  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full mt-24 sm:mt-20 md:mt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center z-0 group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-0"></div>
      </div>

      {/* Content - Now matching other service components */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-pink-600 rounded-full text-sm font-medium mb-2">
            Relaxation
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Luxury Spa Experiences</h3>
          <p className="text-gray-200 mb-4">
            Our spa therapists create personalized journeys combining ancient techniques with modern wellness
            approaches to deliver complete mind-body rejuvenation in a tranquil environment.
          </p>

          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-lg">Our Signature Treatments:</h4>
            <ul className="space-y-4">
              {spaTreatments.map((treatment, index) => (
                <li key={index} className="bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                  <h5 className="font-medium text-pink-300 flex items-center">
                    <span className="inline-block w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                    {treatment.name}
                  </h5>
                  <p className="text-sm text-gray-200 mt-1 pl-4">{treatment.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className='flex flex-row justify-between'>
          <div className="flex justify-center">
            <a
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-blue-700 text-white rounded-lg font-medium text-center transition-colors duration-300 w-full sm:w-auto"
            >
              <FaArrowLeft />
              Home
            </a>
          </div>
          <div className="flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium text-center transition-colors duration-300 w-full sm:w-auto"
            >

              Book Now
            </a>


          </div>


        </div>
      </div>
    </div>
  );
}