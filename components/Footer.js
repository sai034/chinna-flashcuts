import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'All Products', href: '/products' },
        { name: 'New Arrivals', href: '/products/new' },
        { name: 'Best Sellers', href: '/products/bestsellers' },
        { name: 'Special Offers', href: '/products/offers' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'FAQs', href: '/faq' },
        { name: 'Shipping', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 text-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-primary mb-4">Naturals</h3>
            <p className="mb-4">
              Your trusted source for natural and organic products.
            </p>
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary text-white px-4 py-2 rounded-r hover:bg-green-700 transition">
                  Join
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Naturals. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}