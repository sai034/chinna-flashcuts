'use client';

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
// import FacialService from './FacialService';
// import HairCareService from './HairCareService';
// import SpaService from './SpaService';

export default function Services() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20book%20an%20appointment`;
  const businessAddress = "Chinna+FlashCuts+Tirupati+Andhra+Pradesh+517501";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${businessAddress}`;

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience luxury and transformation with our expertly crafted beauty and wellness treatments
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* <FacialService />
          <HairCareService />
          <SpaService /> */}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-800 rounded-xl p-8 sm:p-10 shadow-2xl border border-gray-700 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Ready for Your Transformation?</h3>
              <p className="text-gray-300">Book your appointment today and experience the difference</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp Us
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium"
              >
                <FaMapMarkerAlt className="text-xl" />
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}