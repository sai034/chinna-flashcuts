'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiHeart, FiSmile, FiEye, FiScissors,
  FiDroplet, FiFeather, FiLayers, FiAward
} from 'react-icons/fi';

export default function BridalService() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20book%20an%20appointment`;
  const bridalServices = [
    {
      name: "Bridal Makeup",
      icon: <FiSmile className="text-rose-400 text-2xl" />,
      description: "Professional bridal makeup application using premium, long-lasting cosmetics. Includes trial session, custom look design, and touch-up kit.",
      details: [
        "Airbrush or traditional foundation",
        "Waterproof eye makeup",
        "False lash application",
        "8+ hours lasting power"
      ]
    },
    {
      name: "Bridal Hairstyling",
      icon: <FiFeather className="text-rose-400 text-2xl" />,
      description: "Elegant wedding hairstyles tailored to your dress and theme. Includes trial session and accessories coordination.",
      details: [
        "Updos, braids, or flowing styles",
        "Hair extensions available",
        "Sparkling hair accessories",
        "Long-lasting hold"
      ]
    },
    {
      name: "Pre-Wedding Glow",
      icon: <FiDroplet className="text-rose-400 text-2xl" />,
      description: "3-month skincare program to achieve radiant bridal skin. Includes facials, peels, and customized home care.",
      details: [
        "Monthly professional treatments",
        "Personalized product recommendations",
        "Bridal skin consultation",
        "Acne/brightening solutions"
      ]
    },
    {
      name: "Bridal Henna",
      icon: <FiLayers className="text-rose-400 text-2xl" />,
      description: "Intricate bridal henna designs applied by experienced artists. Includes custom design consultation.",
      details: [
        "Natural, dark-stain henna",
        "Arabic, Indian, or fusion styles",
        "Bride's name hidden in design",
        "2-3 hour application process"
      ]
    },
    {
      name: "Bridal Nails",
      icon: <FiAward className="text-rose-400 text-2xl" />,
      description: "Luxurious manicure and pedicure with wedding-appropriate nail art and extensions.",
      details: [
        "Gel or acrylic options",
        "Bridal-themed nail art",
        "Diamond/pearl accents",
        "2-week durability"
      ]
    },
    {
      name: "Complete Bridal Package",
      icon: <FiHeart className="text-rose-400 text-2xl" />,
      description: "All-inclusive bridal beauty experience with makeup, hair, skincare, and nails plus two bridesmaid services.",
      details: [
        "Save 20% vs individual services",
        "Dedicated bridal coordinator",
        "Emergency touch-up kit",
        "Pre-wedding trial included"
      ]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800 mt-24 sm:mt-20 md:mt-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-gray-800 text-rose-400 rounded-full text-sm font-medium mb-4 border border-gray-700">
            Bridal Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">
            Your Dream Bridal Look
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our bridal specialists will make you feel like the most beautiful version of yourself on your special day.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bridalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-rose-400/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-700 rounded-lg border border-gray-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 ml-4">{service.name}</h3>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-rose-400 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-rose-600 to-pink-700 rounded-xl p-8 text-center shadow-lg border border-rose-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Ready for Your Bridal Trial?</h3>
          <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
            Schedule a consultation with our bridal specialist to design your perfect wedding day look.
          </p>
          <div className='flex flex-row justify-center gap-3'>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-nowrap px-6 py-3 bg-white text-rose-700 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Book Consultation
              </Link>

            </div>
            <div className="flex justify-center ">
              <a
                href='/'
                className="px-6 py-3 bg-gray-600 hover:bg-gray-800 text-white rounded-lg font-medium text-center transition-colors duration-300 w-full sm:w-auto"
              >
                Home
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}