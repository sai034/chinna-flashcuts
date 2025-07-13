"use client"
import React from 'react';
import Link from 'next/link';
import { FaWhatsapp} from 'react-icons/fa';
export default function FacialService() {
      const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20book%20an%20appointment`;
  const facialTreatments = [
    {
      name: "Deep Cleansing Facial",
      description: "A thorough cleansing treatment that removes impurities, excess oil, and dead skin cells using specialized techniques and products to unclog pores and prevent breakouts."
    },
    {
      name: "Anti-Aging Facial",
      description: "Targeted treatment that reduces fine lines and wrinkles while improving skin elasticity through collagen-boosting ingredients like retinol and peptides."
    },
    {
      name: "Hydrating Facial",
      description: "Intensive moisture therapy that replenishes dehydrated skin with hyaluronic acid and nourishing serums, leaving skin plump and radiant."
    },
    {
      name: "Brightening Facial",
      description: "Treatment designed to even skin tone and reduce pigmentation using vitamin C, kojic acid, and other brightening agents for a luminous complexion."
    },
    {
      name: "Acne Treatment Facial",
      description: "Medicated facial that cleanses deep within pores, reduces inflammation, and controls excess oil production to treat and prevent acne breakouts."
    }
  ];

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full mt-24 sm:mt-20 md:mt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center z-0 group-hover:scale-105 transition-transform duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-0"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-purple-600 rounded-full text-sm font-medium mb-2">
            Skin Care
          </span>
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Premium Facial Treatments</h3>
          <p className="text-gray-200 mb-4">
            Our expert estheticians customize each facial to your unique skin needs, combining advanced techniques with premium skincare products for visible results. 
            Each treatment includes deep cleansing, exfoliation, extractions when needed, massage, mask, and hydration.
          </p>
          
          <div className="mb-4">
            <h4 className="font-semibold mb-2 text-lg">Our Signature Treatments:</h4>
            <ul className="space-y-4">
              {facialTreatments.map((treatment, index) => (
                <li key={index} className="bg-black/30 p-3 rounded-lg backdrop-blur-sm">
                  <h5 className="font-medium text-purple-300 flex items-center">
                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
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
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium text-center transition-colors duration-300 w-full sm:w-auto"
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