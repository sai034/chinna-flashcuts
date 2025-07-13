'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHome, FiShoppingBag, FiUser, FiPhone,
  FiChevronLeft, FiChevronRight, FiChevronDown,
  FiActivity, FiFeather, FiDroplet
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { TiFlash } from 'react-icons/ti';
import { FaRing } from 'react-icons/fa';

export default function Sidebar() {
  const phoneNumber = '9985303562';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Chinna%20FlashCuts,%20I%20would%20like%20to%20know%20more%20about%20your%20services`;

  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [servicesOpen, setServicesOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavigation = (href) => {
    if (pathname !== href) {
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
    <motion.div
      className="hidden md:block bg-gray-900 h-screen sticky top-0 overflow-hidden border-r border-gray-800"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={{
        open: { width: '280px' },
        closed: { width: '80px' },
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm">
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center"
            >
              <div className="flex items-center cursor-pointer">
                <TiFlash className="text-blue-400 text-2xl mr-2" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  Chinna FlashCuts
                </span>
              </div>
            </motion.div>
          ) : (
            <TiFlash size={24} className="text-blue-400 text-2xl" />
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all cursor-pointer"
        >
          {isOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
        </button>
      </div>

      <nav className="mt-4 px-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.subItems ? (
                <div className="space-y-1 cursor-pointer">
                  <div
                    className={`flex items-center justify-between p-3 rounded-lg transition-all cursor-pointer ${pathname.startsWith('/services')
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <div className="flex items-center">
                      <span className={pathname.startsWith('/services') ? 'text-blue-400' : 'text-gray-400'}>
                        {item.icon}
                      </span>
                      {isOpen && (
                        <motion.span className="ml-3 font-medium cursor-pointer">
                          {item.name}
                        </motion.span>
                      )}
                    </div>
                    {isOpen && (
                      <motion.span
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiChevronDown className={pathname.startsWith('/services') ? 'text-blue-400' : 'text-gray-400'} />
                      </motion.span>
                    )}
                  </div>

                  <AnimatePresence>
                    {servicesOpen && isOpen && (
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
                            whileHover={{ x: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <button
                              onClick={() => handleNavigation(subItem.href)}
                              className={`flex items-center w-full p-3 rounded-lg transition-all group cursor-pointer ${pathname === subItem.href
                                  ? 'bg-blue-900/50 text-white'
                                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                }`}
                              onMouseEnter={() => setActiveMenu(subItem.name)}
                              onMouseLeave={() => setActiveMenu('')}
                            >
                              <span
                                className={`mr-3 ${pathname === subItem.href
                                    ? 'opacity-100 text-blue-400'
                                    : 'opacity-80 group-hover:opacity-100'
                                  }`}
                              >
                                {subItem.icon}
                              </span>
                              <span className="relative">
                                {subItem.name}
                                {activeMenu === subItem.name && (
                                  <motion.span
                                    layoutId="underline"
                                    className="absolute left-0 top-full mt-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 w-full"
                                    initial={false}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                  />
                                )}
                              </span>
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
                  className={`flex items-center w-full p-3 rounded-lg transition-all cursor-pointer ${pathname === item.href
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                >
                  <span className={pathname === item.href ? 'text-blue-400' : ''}>
                    {item.icon}
                  </span>
                  {isOpen && (
                    <span className={`ml-3 ${pathname === item.href ? 'font-bold' : ''}`}>
                      {item.name}
                    </span>
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
}