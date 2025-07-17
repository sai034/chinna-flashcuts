'use client';
import React from 'react';
import Link from 'next/link';
import { FiMapPin, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Services() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20book%20an%20appointment`;
  const services = [
    {
      title: 'Customized Facials',
      description: 'Discover radiant skin with our tailored facial treatments, crafted to rejuvenate and enhance your unique complexion.',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      alt: 'Customized Facial Treatment',
    },
    {
      title: 'Advanced Hair Care Treatments',
      description: 'Transform your hair with expert treatments designed to restore strength, customized to your needs.',
      image: 'https://images.pexels.com/photos/3998421/pexels-photo-3998421.jpeg',
      alt: 'Advanced Hair Care Treatment',
    },
    {
      title: 'Luxurious Spa Therapies',
      description: 'Unwind in our tranquil spa, where personalized therapies soothe your body and uplift your spirit.',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
      alt: 'Luxurious Spa Therapy',
    },
  ];
  const franchises = [
    {
      name: 'Tirupati Main Branch',
      address: '123+Main+Road+Tirupati+Andhra+Pradesh+517501',
      phone: '+919876543210',
    },
    {
      name: 'Renigunta Branch',
      address: '456+Gandhi+Road+Renigunta+Andhra+Pradesh+517520',
      phone: '+919876543211',
    },
    {
      name: 'Chandragiri Branch',
      address: '789+Fort+Road+Chandragiri+Andhra+Pradesh+517101',
      phone: '+919876543212',
    },
  ];
  const businessAddress = 'Chinna+FlashCuts+Tirupati+Andhra+Pradesh+517501';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${businessAddress}`;

  const tabs = [
    { name: 'Bridal', href: '/bridal' },
    { name: 'Skin', href: '/skincare' },
    { name: 'Hair', href: '/haircare' },
    { name: 'Body', href: '/bodycare' },
  ];

  return (
    <section className="bg-gray-800 py-10 px-4 sm:px-6 lg:px-8 mt-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Our Services
        </h2>

        {/* Tabs Navigation */}
        <nav className="text-white py-3 mb-8 rounded-lg shadow-md border-b border-gray-600">
          <div className="flex justify-center space-x-2 sm:space-x-4">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className="whitespace-nowrap px-2 sm:px-4 py-2 text-md sm:text-md md:text-base font-medium text-white hover:bg-gray-700 rounded-md transition-colors"
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {services.map((service, index) => (
            <Link
              key={index}
              href={
                service.title === 'Customized Facials' ? '/skincare' :
                  service.title === 'Advanced Hair Care Treatments' ? '/haircare' :
                    service.title === 'Luxurious Spa Therapies' ? '/bodycare' : '#'
              }
              passHref
            >
              <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 transition-all duration-300">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center my-8">
          <h3 className="text-2xl font-light text-gray-300 mb-4 font-sans">Book Now</h3>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-xl shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <FaWhatsapp className="text-2xl mr-3" />
            <span className="text-lg font-medium font-sans">Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}