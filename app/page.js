"use client"
import Hero from '../components/HeroSection';
import Offers from '../components/OffersSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import BrandValue from '../components/BrandValue';
import AboutWork from '../components/AboutWork';
import { FaWhatsapp } from 'react-icons/fa';
export default function Home() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20know%20more%20about%20your%20services`;
  return (
    <div>

      <div className="flex justify-end mb-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-3 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-all duration-300"
        >
          <FaWhatsapp size={28} className="transition-transform group-hover:scale-110" />

          {/* Hover Text */}

          <div className="absolute top-12 left-[2px] transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-md whitespace-nowrap shadow-lg min-w-[180px] text-center">
              Book your appointment
            </div>
            <div className="w-3 h-3 bg-gray-800 rotate-45 absolute bottom-0 left-1/2 -translate-x-1/2 -mb-1.5"></div>
          </div>
        </a>
      </div>
      <div className='ml-3 w-full'>
        <Hero />

        <AboutWork />
        {/* <Offers /> */}
        {/* <WhyChooseUs /> */}
        <Services />
        <BrandValue />
      </div>
    </div>
  );
}