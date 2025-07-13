'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function About() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20know%20more%20about%20your%20services`;



  const franchises = [
    {
      name: "Tirupati Main Branch",
      address: "https://maps.app.goo.gl/wg6CP8kBzfBHLcJr9",
      phone: "+919876543210"
    },
    {
      name: "Renigunta Branch",
      address: "https://maps.app.goo.gl/wg6CP8kBzfBHLcJr9",
      phone: "+919876543211"
    },
    {
      name: "Chandragiri Branch",
      address: "https://maps.app.goo.gl/wg6CP8kBzfBHLcJr9",
      phone: "+919876543212"
    }
  ];
  const carouselImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1618219744090-3ac2a0a4b4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1595475207225-428b62c44b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  ]
  return (
    <div className="bg-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <Image
          src="/salon-interior.jpg"
          alt="Chinna FlashCuts Interior"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Our Story
          </h1>
          <p className="text-xl max-w-2xl">
            From humble beginnings to Tirupati's premier salon experience
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                25 Years
              </span> of Excellence
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Established in 1999, Chinna FlashCuts began as a single-chair barbershop in the heart of Tirupati.
              Through dedication to craft and client satisfaction, we've grown into a multi-location luxury salon.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Our founder Chinna's vision was simple: provide world-class grooming services with the warmth of
              traditional Indian hospitality. Today, that vision lives on through our team of passionate professionals.
            </p>


          </div>



          <div className="order-2 lg:order-1 max-w-md mx-auto">
            <Carousel
              autoPlay
              interval={2000}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showArrows={true}
              className="rounded-lg shadow-lg"
            >
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`ChinnaFlashCuts Spa ${index + 1}`}
                    className="w-full h-64 sm:h-72 lg:h-[100%] object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Team Section */}


      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-center mb-12 ">
          Our Core <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          {[
            {
              title: "Excellence",
              description: "We never compromise on quality, using only premium products and techniques.",
              icon: "⭐"
            },
            {
              title: "Innovation",
              description: "Continually updating our skills with the latest industry advancements.",
              icon: "✨"
            },
            {
              title: "Community",
              description: "Proudly serving Tirupati with personalized care for 25 years.",
              icon: "👨"
            }
          ].map((value, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-4 mb-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-sans">
          Our Franchises
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {franchises.map((branch, index) => {
            const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${branch.address}`;

            return (
              <div
                key={index}
                className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 font-sans">{branch.name}</h3>

                  <div className="space-y-4 mt-4">
                    <a
                      // href={googleMapsUrl}
                      href={branch.address}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans flex items-center justify-between bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 px-4 py-3 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center">
                        <FiMapPin className="mr-3 text-blue-400" />
                        <span className='font-sans'>View Location</span>
                      </div>
                      <FiChevronRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href={`tel:${branch.phone}`}
                      className="flex items-center justify-between bg-gray-700/50 hover:bg-gray-700 border border-gray-600 text-gray-300 px-4 py-3 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className='font-sans'>Call Now</span>
                      </div>
                      <FiChevronRight className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Chinna FlashCuts?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why we've been Tirupati's favorite for 25 years
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-xl shadow-lg hover:bg-[#128C7E]transition-all font-bold text-lg"
          >
            <FaWhatsapp className="mr-3 text-xl" />
            Book Now on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}