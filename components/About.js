'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiPhone } from 'react-icons/fi';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function About() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20know%20more%20about%20your%20services`;

  const teamMembers = [
    {
      name: "Chinna",
      role: "Founder & Master Stylist",
      bio: "With 25+ years of experience, Chinna brings unparalleled expertise to every haircut.",
      image: "/team-chinna.jpg"
    },
    {
      name: "Raju",
      role: "Senior Color Specialist",
      bio: "Specializing in advanced coloring techniques and hair treatments.",
      image: "/team-raju.jpg"
    },
    {
      name: "Priya",
      role: "Spa Director",
      bio: "Creates customized facial and spa experiences for each client.",
      image: "/team-priya.jpg"
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
            From humble beginnings to Tirupati&apos;s premier salon experience
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
              Through dedication to craft and client satisfaction, we&apos;ve grown into a multi-location luxury salon.
            </p>
            <p className="text-lg leading-relaxed mb-8">
              Our founder Chinna&apos;s vision was simple: provide world-class grooming services with the warmth of
              traditional Indian hospitality. Today, that vision lives on through our team of passionate professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-colors"
              >
                <FaWhatsapp className="mr-2 text-xl" />
                Chat With Us
              </a>
              <a
                href="tel:+919985303562"
                className="flex items-center justify-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                <FiPhone className="mr-2" />
                Call: 9985303562
              </a>
            </div>
          </div>

          <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/salon-history.jpg"
              alt="Chinna FlashCuts in early days"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Dream Team</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              icon: "👨‍👩‍👧‍👦"
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Chinna FlashCuts?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why we&apos;ve been Tirupati&apos;s favorite for 25 years
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-100 transition-all font-bold text-lg"
          >
            <FaWhatsapp className="mr-3 text-xl" />
            Book Now on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}