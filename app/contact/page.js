
'use client';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20book%20an%20appointment`;
  const placeholderMapImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';

  const franchises = [
    {
      name: "Tirupati Main Branch",
      address: "123 Main Road, Tirupati, Andhra Pradesh 517501",
      mapLink: "https://maps.app.goo.gl/wg6CP8kBzfBHLcJr9",
      phone: "+919985303562",
      hours: "9:00 AM - 8:00 PM (Daily)"
    },
    {
      name: "Renigunta Branch",
      address: "456 Gandhi Road, Renigunta, Andhra Pradesh 517520",
      mapLink: "https://maps.app.goo.gl/wg6CP8kBzfBHLcJr9",
      phone: "+919876543211",
      hours: "10:00 AM - 7:00 PM (Daily)"
    },
    {
      name: "Chandragiri Branch",
      address: "789 Fort Road, Chandragiri, Andhra Pradesh 517101",
      mapLink: "https://maps.app.goo.gl/wg6CP8kBzfBHLcJr9",
      phone: "+919876543212",
      hours: "10:00 AM - 7:00 PM (Daily)"
    }
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-24 sm:mt-20 md:mt-0">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reach out to our friendly team at any of our locations
          </p>
        </motion.div>

        {/* Franchise Locations with Static Map Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {franchises.map((branch, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Map Preview Image with Clickable Link */}
              <div className="h-48 w-full relative">
                <a href={branch.mapLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={placeholderMapImage}
                    alt={`${branch.name} Location`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </a>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">{branch.name}</h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                    <p>{branch.address}</p>
                  </div>

                  <div className="flex items-center">
                    <FaClock className="text-blue-400 mr-3" />
                    <p>{branch.hours}</p>
                  </div>

                  <div className="flex items-center">
                    <FaPhone className="text-blue-400 mr-3" />
                    <a href={`tel:${branch.phone}`} className="hover:text-blue-400 transition-colors">
                      {branch.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-col lg:flex-row gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp
                  </a>

                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    View Map
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Owner Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-700 rounded-xl p-8 mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Meet The Owner
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="h-48 w-48 rounded-full bg-gray-600 flex items-center justify-center text-6xl">
                <FaUserTie className="text-blue-400" />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-2">Chinna</h3>
              <p className="text-lg mb-4">Founder & Master Stylist</p>
              <p className="text-gray-300 mb-6">
                With over 25 years of experience in the beauty industry, Chinna personally oversees all operations
                and ensures every client receives exceptional service at all our locations.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <FaWhatsapp className="mr-2" />
                  Chat Directly
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <FaPhone className="mr-2" />
                  Call Owner
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Booking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Look?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your appointment now and experience the Chinna FlashCuts difference!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-xl shadow-lg hover:bg-[#128C7E] transition-all font-bold text-lg"
            >
              <FaWhatsapp className="text-2xl mr-3" />
              <span className="text-lg">Instant WhatsApp Booking</span>
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center px-8 py-4 bg-blue-900 text-white rounded-lg font-bold hover:bg-blue-950 transition-all"
            >
              <FaPhone className="text-2xl mr-3" />
              <span className="text-lg">Call Now: {phoneNumber}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}