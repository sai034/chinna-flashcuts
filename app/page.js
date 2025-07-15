"use client";
import React, { useState } from "react";
import Hero from "../components/HeroSection";
import Offers from "../components/OffersSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import BrandValue from "../components/BrandValue";
import AboutWork from "../components/AboutWork";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const phoneNumber = "9985303562";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20know%20more%20about%20your%20services`;

  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div>

      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2 z-50">
        {showTooltip && (
          <div className="relative">

            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-[2px] rounded-full shadow-lg">

              <div className="flex items-center justify-center bg-white rounded-full px-5 py-3">
                <span className="hidden md:block text-md font-normal text-gray-900 whitespace-nowrap">
                  Book your appointment
                </span>
                <span className="flex-none md:hidden text-xs font-normal text-gray-900 whitespace-nowrap">
                  Book your appointment
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowTooltip(false)}
              className="cursor-pointer absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 bg-black rounded-full shadow-md"
              aria-label="Close"
            >
              <IoClose size={16} color="white" />
            </button>
          </div>
        )}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-[#25D366] text-white rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-lg"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>


      <div className="ml-1 w-full">
        <Hero />
        <AboutWork />
        {/* <Offers /> */}
        {/* <WhyChooseUs /> */}
        <BrandValue />
      </div>
    </div>
  );
}
