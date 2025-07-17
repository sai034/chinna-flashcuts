

'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMapPin, FiChevronRight, FiX, FiChevronLeft } from 'react-icons/fi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Modal from 'react-modal';
import Services from './Services';

if (typeof window !== 'undefined') {
  Modal.setAppElement('#root');
}

export default function AboutWork() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [carouselInterval, setCarouselInterval] = useState(null);

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

  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20book%20an%20appointment`;

  const franchises = [
    {
      name: 'Balaji Colony',
      address: 'https://maps.app.goo.gl/UAbYakfYXA4L3Wa46',
      phone: '+919985303562',
    },
    {
      name: 'RN Mada Street',
      address: 'https://maps.app.goo.gl/jQaYKr3yzUoBZRiG8?g_st=aw',
      phone: '+919985303562',
    },
    {
      name: 'RS Mada Street',
      address: 'https://maps.app.goo.gl/8wxgeqhbyMc2tbbQ9?g_st=aw',
      phone: '+919985303562',
    },
  ];

  const carouselImages = [
    '/images/ChinnaBranch1.jpg',
    '/images/ChinnaBranch1-2.jpg',
    '/images/ChinnaBranch1-3.jpg',
    '/images/ChinnaBranch1-4.jpg',
    '/images/ChinnaBranch1-5.jpg',
    '/images/ChinnaBranch1-6.jpg',
  ];

  const openModal = (startIndex = 0) => {
    setCurrentImageIndex(startIndex);
    setModalIsOpen(true);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    setCarouselInterval(interval);
  };

  const closeModal = () => {
    if (carouselInterval) {
      clearInterval(carouselInterval);
      setCarouselInterval(null);
    }
    setModalIsOpen(false);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    return () => {
      if (carouselInterval) {
        clearInterval(carouselInterval);
      }
    };
  }, [carouselInterval]);

  return (
    <div id="root">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Slideshow"
        className="modal"
        overlayClassName="overlay"
        style={{
          content: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            padding: 0,
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          overlay: {
            zIndex: 1000,
          },
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <button
            onClick={closeModal}
            className="cursor-pointer absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors z-50"
            aria-label="Close modal"
          >
            <FiX size={24} />
          </button>

          <button
            onClick={goToPreviousImage}
            className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors z-50"
            aria-label="Previous image"
          >
            <FiChevronLeft size={24} />
          </button>

          <img
            src={carouselImages[currentImageIndex]}
            alt={`Slideshow image ${currentImageIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />

          <button
            onClick={goToNextImage}
            className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors z-50"
            aria-label="Next image"
          >
            <FiChevronRight size={24} />
          </button>

          <div className="absolute bottom-10 left-0 right-0 text-center">
            <div className="inline-block bg-black/70 text-white px-4 py-2 rounded-lg"></div>
          </div>
        </div>
      </Modal>

      <section className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-4 mb-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent font-sans">
            About Chinna&apos;s FlashCutss - Tirupati
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 max-w-md mx-auto">
              <Carousel
                autoPlay={true}
                interval={3000}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                className="rounded-lg shadow-lg"
              >
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openModal(index)}
                    className="cursor-pointer flex justify-center"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && openModal(index)}
                  >
                    <img
                      src={image}
                      alt={`ChinnaFlashCuts Spa ${index + 1}`}
                      className="w-1/2 h-68 object-cover rounded-lg transform hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-md md:text-xl leading-relaxed mb-6 font-sans">
                Established 25 years ago with a single franchise, ChinnaFlashCuts has grown into a trusted name in beauty and wellness, now proudly operating across three successful franchises, including our location in Tirupati.
              </p>
              <p className="text-md md:text-xl leading-relaxed font-sans">
                At Chinna&apos;s FlashCutss, we understand that every individual is unique. That's why our services are personalized to match your specific needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-4">
        <section className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 mt-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Why Choose Us
            </h2>

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
      </div>

      <div className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-md md:text-xl leading-relaxed mb-6 font-sans">
          We are deeply committed to uncompromising quality—using only premium, industry-leading products.
        </p>
        <p className="text-md md:text-xl leading-relaxed mb-8 font-sans">
          Our dedicated team in Tirupati is here to give you the care, attention, and expertise you deserve.
        </p>

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
      <Services />
      <div className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-4 mb-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-sans">
          Our Franchises
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {franchises.map((branch, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 font-sans">{branch.name}</h3>
                <div className="space-y-4 mt-4">
                  <a
                    href={branch.address}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans flex items-center justify-between bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 px-4 py-3 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center">
                      <FiMapPin className="mr-3 text-blue-400" />
                      <span>View Location</span>
                    </div>
                    <FiChevronRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={`tel:${branch.phone}`}
                    className="flex items-center justify-between bg-gray-700/50 hover:bg-gray-700 border border-gray-600 text-gray-300 px-4 py-3 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5 öğrendim.2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>Call Now</span>
                    </div>
                    <FiChevronRight className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}