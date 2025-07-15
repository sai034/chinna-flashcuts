'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHome, FiShoppingBag, FiUser, FiPhone,
  FiX, FiMenu, FiChevronDown, FiChevronUp,
  FiDroplet, FiFeather, FiActivity
} from 'react-icons/fi';
import { FaWhatsapp, FaRing } from 'react-icons/fa';
import { TiFlash } from 'react-icons/ti';

export default function MobileMenu() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20know%20more%20about%20your%20services`;

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  };

  const handleNavigation = (href) => {
    if (pathname !== href) {
      toggleMenu();
      router.push(href);
    }
  };

  const navItems = [
    { name: 'Home', href: '/', icon: <FiHome size={20} /> },
    { name: 'About', href: '/about', icon: <FiUser size={20} /> },
    {
      name: 'Services',
      icon: <FiShoppingBag size={20} />,
      subItems: [
        { name: 'SkinCare', href: '/skincare', icon: <FiDroplet className="text-blue-300" /> },
        { name: 'HairCare', href: '/haircare', icon: <FiFeather className="text-purple-300" /> },
        { name: 'BodyCare', href: '/bodycare', icon: <FiActivity className="text-pink-300" /> }
      ]
    },
    { name: 'Bridal', href: '/bridal', icon: <FaRing size={20} /> },
    { name: 'Contact', href: '/contact', icon: <FiPhone size={20} /> },
  ];

  if (!isMounted) return null;

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 bg-gray-900 border-b border-gray-800 z-40 p-4 flex justify-between items-center backdrop-blur-sm">
        <button
          onClick={toggleMenu}
          className="text-gray-300 p-2 hover:text-white"
          aria-label="Menu"
        >
          <FiMenu size={24} />
        </button>

        <div className="flex justify-center items-center m-auto">
          <TiFlash className="text-blue-400 text-2xl" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent ml-2">
            Chinna&apos;s FlashCutss
          </span>
        </div>


      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 left-0 w-4/5 max-w-sm h-screen bg-gray-900 border-r border-gray-800 shadow-2xl z-40"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
              <div className="flex items-center">
                <TiFlash className="text-blue-400 text-2xl mr-2" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  Chinna&apos;s FlashCutss
                </span>
              </div>
              <button
                onClick={toggleMenu}
                className="text-gray-300 p-2 hover:text-white"
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <ul className="p-4 overflow-y-auto h-[calc(100%-7.5rem)] space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <div className="space-y-1">
                      <button
                        className={`flex items-center justify-between w-full p-3 rounded-lg transition-all ${servicesOpen ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
                          }`}
                        onClick={() => setServicesOpen(!servicesOpen)}
                      >
                        <div className="flex items-center">
                          <span className={servicesOpen ? 'text-blue-400' : 'text-gray-400'}>
                            {item.icon}
                          </span>
                          <span className="ml-3">{item.name}</span>
                        </div>
                        {servicesOpen ? (
                          <FiChevronUp className="text-blue-400" />
                        ) : (
                          <FiChevronDown className="text-gray-400" />
                        )}
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: 'auto',
                              opacity: 1,
                              transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.2, delay: 0.1 }
                              }
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                              transition: {
                                height: { duration: 0.2 },
                                opacity: { duration: 0.1 }
                              }
                            }}
                            className="overflow-hidden space-y-1 pl-11"
                          >
                            {item.subItems.map((subItem) => (
                              <motion.li
                                key={subItem.name}
                                whileTap={{ scale: 0.98 }}
                              >
                                <button
                                  onClick={() => handleNavigation(subItem.href)}
                                  className={`flex items-center w-full p-3 rounded-lg transition-all ${pathname === subItem.href
                                    ? 'bg-blue-900/50 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                    }`}
                                >
                                  <span className={`mr-3 ${pathname === subItem.href
                                    ? 'text-blue-400'
                                    : 'text-gray-400'
                                    }`}>
                                    {subItem.icon}
                                  </span>
                                  <span>{subItem.name}</span>
                                </button>
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`flex items-center w-full p-3 rounded-lg transition-all ${pathname === item.href
                        ? 'bg-blue-900 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                        }`}
                    >
                      <span className={`mr-3 ${pathname === item.href
                        ? 'text-blue-400'
                        : 'text-gray-400'
                        }`}>
                        {item.icon}
                      </span>
                      <span>{item.name}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}